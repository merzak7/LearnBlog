var gulp = require('gulp')
var tsc = require('gulp-typescript')
var uglify = require('gulp-uglify')
var nodemon = require('gulp-nodemon')
var tsfmt = require('gulp-tsfmt')
var changedInPlace = require('gulp-changed-in-place')
var changed = require('gulp-changed')
var browserSync = require('browser-sync').create()
var path = require('path')
var rm = require('del')


// projects config
var project = {
  "project": tsc.createProject('./tsconfig.json', {
    "module": "commonjs",
    "watch": false
  }),
  "tsfmt": {
    "IndentSize": 4,
    "TabSize": 4,
    "NewLineCharacter": "\n",
    "ConvertTabsToSpaces": true,
    "InsertSpaceAfterCommaDelimiter": true,
    "InsertSpaceAfterSemicolonInForStatements": true,
    "InsertSpaceBeforeAndAfterBinaryOperators": true,
    "InsertSpaceAfterKeywordsInControlFlowStatements": true,
    "InsertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
    "InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
    "PlaceOpenBraceOnNewLineForFunctions": false,
    "PlaceOpenBraceOnNewLineForControlBlocks": false
  },
  "src": "./server/**/*.ts",
  "build": "./build/server",
  "dist": "./dist/server",
  "static": "./public/**"
}


gulp.task('tsc', () => {
  gulp.src(path.normalize(project.src))
  .pipe(tsc(project.project))
  .pipe(gulp.dest(path.normalize(project.build)))
})

gulp.task('tsformat', () => {
  gulp.src('./server')
  .pipe(changedInPlace({firstPass: true}))
  .pipe(tsfmt({options: project.tsfmt}))
  .pipe(gulp.dest(project.src))
})


gulp.task('build', ['tsc', 'copy-static'], () => {})

gulp.task('dist', ['tsc', 'copy-static'], () => {
  gulp.src(path.normalize(project.build + '/**/*.js'))
  .pipe(uglify())
  .pipe(gulp.dest(path.normalize(project.dist)))
})


gulp.task('watch:server', ['serve'], () => {
  gulp.watch(path.normalize(project.src), ['tsformat', 'tsc'])
})


gulp.task('watch:public', ['serve'], () => {
  browserSync.init({
    port: 9000,
    open: false,
    server: {baseDir: './public'},
    ui: {port: 9001}
  })
gulp.watch(path.normalize(project.static))
  .on('change', browserSync.reload)
})

gulp.task('copy-static', () => {
  gulp.src(path.normalize(project.static))
  .pipe(changed(path.normalize(path.join(project.build, 'public'))))
  .pipe(gulp.dest(path.normalize(path.join(project.build, 'public'))))
// .pipe(gulp.dest(path.normalize(path.join(project.dist, 'public'))))
})


gulp.task('serve', ['build'], () => {
  nodemon({script: './build/server/go.js'})
})


gulp.task('clean:build', () => {
  rm('./build/**')
  .then((cleaned) => {console.log('Cleaned build\n', cleaned)})
})
gulp.task('clean:dist', () => {
  rm('./dist/**')
  .then((cleaned) => {console.log('Cleaned dist\n', cleaned)})
})
gulp.task('clean', ['clean:build', 'clean:dist'], () => {})


gulp.task('default', ['clean', 'dist'], () => {})
