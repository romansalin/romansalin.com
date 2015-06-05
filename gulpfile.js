var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

//gulp.task('lint', function() {
//    gulp.src('./src/*.js')
//        .pipe(jshint())
//        .pipe(jshint.reporter('default'));
//});
//
//gulp.task('minify', function() {
//    gulp.src('./src/*.js')
//        .pipe(concat('all.js'))
//        .pipe(gulp.dest('./dist'))
//        .pipe(rename('all.min.js'))
//        .pipe(uglify())
//        .pipe(gulp.dest('./dist'));
//});
//
//gulp.task('default', function() {
//    gulp.run('lint', 'minify');
//
//    gulp.watch('./src/*.js', function(event) {
//        gulp.run('lint', 'minify');
//    });
//});
