var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

gulp.task('styles', () => {
    gulp.src('./fe/assets/css/global.scss')
    	.pipe(sass().on('error', sass.logError))
    	.pipe(uglifycss({
			"uglyComments": true
		}))
		.pipe(gulp.dest('./public/dist/assets/css'));
});