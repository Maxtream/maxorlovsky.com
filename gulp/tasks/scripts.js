const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('scripts', () => {
    gulp.src([
			'./fe/app/**/*.js'
		])
    	.pipe(uglify())
    	.pipe(concat('scripts.js'))
        .pipe(gulp.dest('./public/dist/js/'));
});