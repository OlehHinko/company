'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist/css'));
});
gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', ['sass']);
});
