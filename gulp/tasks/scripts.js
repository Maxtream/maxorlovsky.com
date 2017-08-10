const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const gwebpack = require('gulp-webpack');
const webpack = require('webpack');

gulp.task('scripts', () => {
	const webpackConfig = require('../../webpack.config.js');

    return gulp.src('./fe/src/app.js')
    	.pipe(gwebpack(webpackConfig, webpack))
        .pipe(gulp.dest('./public/dist/js/'));
});