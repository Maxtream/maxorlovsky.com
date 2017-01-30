const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

gulp.task('scripts', () => {
    gulp.src([
			'./fe/src/**/*.js'
		])
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
    	.pipe(uglify())
    	.pipe(concat('scripts.js'))
        .pipe(gulp.dest('./public/dist/js/'));
});