var gulp = require('gulp')
var tsc = require('gulp-typescript')
var uglify = require('gulp-uglify')
var nodemon = require('gulp-nodemon')
var path = require('path')
var rm = require('del')


// projects config
var project = {
    "project": tsc.createProject('./tsconfig.json', {"watch":false}),
    "src": "./server/**/*.ts",
    "build": "./build/server",
    "dist": "./dist/server"
}


gulp.task('tsc', function() {
    return gulp.src(path.normalize(project.src))
      .pipe(tsc(project.project))
      .pipe(gulp.dest(path.normalize(project.build)));
});
gulp.task('build',['tsc'], function() {});


gulp.task('dist', ['tsc'], function() {
    return gulp.src(path.normalize(project.build + '/**/*.js'))
      .pipe(uglify())
      .pipe(gulp.dest(path.normalize(project.dist)));
});


gulp.task('watch', function() {
    return gulp.watch(path.normalize(project.src), ['tsc']);
});


gulp.task('serve', ['build'], function() {
    return nodemon({script: './build/server/go.js'});
});


gulp.task('clean:build', function() {
    rm('./build/**').then((cleaned)=>{console.log('Cleaned build\n', cleaned)})
});
gulp.task('clean:dist', function() {
    rm('./dist/**').then((cleaned)=>{console.log('Cleaned dist\n', cleaned)})
});
gulp.task('clean',['clean:build', 'clean:dist'], function() {});


gulp.task('default',['clean', 'dist'], function() {});