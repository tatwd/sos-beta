'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync').create();

var reload = browserSync.reload;

// Directory Objects

var _SASS_ = {
    SRC : 'scss/*.scss',
};

var _DIST_ = {
    CSS: 'dist/css',
    JS : 'dist/js'
};


/**
 * ----
 * Tasks Definition
 * ----
 */

// serve task
gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: {
            baseDir: './',
            index: 'demo.html'
        }
    });

    gulp.watch(_SASS_.SRC, ['sass']);
    gulp.watch("*.html").on('change', reload);
});

// sass task
gulp.task('sass', function () {
    return gulp.src('./scss/sos.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('Error', sass.logError))
        .pipe(gulp.dest(_DIST_.CSS))
        .pipe(browserSync.stream());
});

// js task
gulp.task('js:changed', function() {
    return gulp.src(_DIST_.JS + '/main.js')
        .pipe(browserSync.stream());
});

// watch task
gulp.task('watch', function () {
    gulp.watch(_SASS_.SRC, ['sass']);
    gulp.watch(_DIST_.JS + '/main.js', ['js:changed']);
    gulp.watch('*.html').on('change', reload);
});

// default task
gulp.task('default', ['serve', 'watch']);