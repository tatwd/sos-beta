'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    // uglify      = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

var reload = browserSync.reload;

// Directory Objects

var _SASS_ = {
    SRC : 'scss/*.scss',
    // TEST: 'scss/tests/*.scss',
};

// var _JS_ = {
//     SRC : 'js/src/*.js',
//     TEST: 'js/tests/*.js',
//     DIST: 'js/dist'
// };

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
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './',
            index: 'index.html'
        }
    });
});

// sass task
gulp.task('sass', function () {
    return gulp.src(_SASS_.SRC)
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('Error', sass.logError))
        .pipe(gulp.dest(_DIST_.CSS))
        .pipe(browserSync.stream());
});

// uglify task
// gulp.task('uglify', function () {
//     gulp.src(_JS_.TEST)
//         .pipe(uglify())
//         .pipe(gulp.dest(_JS_.DIST))
//         .pipe(browserSync.stream());
// });

// watch task
gulp.task('watch', function () {
    gulp.watch(_SASS_.SRC, ['sass']);
    // gulp.watch(_JS_.TEST, ['uglify']);
    gulp.watch("*.html").on('change', reload);
});

// default task
gulp.task('default', ['sass', 'serve', 'watch']);