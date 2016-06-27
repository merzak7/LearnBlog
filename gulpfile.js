var gulp = require('gulp')
var tsc = require('gulp-typescript')
var uglify = require('gulp-uglify')
var path = require('path')


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


gulp.task('default',['build'], function() {});
