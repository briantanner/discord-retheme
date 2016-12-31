'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

const cssPaths = {
	src: './src/**/*.scss',
	dest: './css',
};

gulp.task('default', ['sass']);

gulp.task('watch', ['sass'], () => {
  gulp.watch(cssPaths.src, ['sass']);
});

gulp.task('build', ['sass']);

gulp.task('sass', () =>
  gulp.src(cssPaths.src)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(cssPaths.dest)));