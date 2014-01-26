'use strict';

var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    mocha   = require('gulp-mocha');

gulp.task('default', function () {
    gulp.src('./test/jquery.attrMatcher_spec.js')
        .pipe(mocha({reporter: 'nyan'}));

    gulp.src('./src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});