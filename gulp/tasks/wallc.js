const gulp = require('gulp');
const concat = require('gulp-concat');
const runSequence = require('run-sequence');

gulp.task('wallc', function(cb) {
	return runSequence(
		['wallc:styles', 'wallc:scripts'],
	cb);
});

gulp.task('wallc:styles', function(cb) {
	return gulp.src([
			'./node_modules/fullcalendar/dist/fullcalendar.min.css'
		])
    	.pipe(concat('styles.css'))
        .pipe(gulp.dest('./public/wallc/'));
});

gulp.task('wallc:scripts', function(cb) {
	return gulp.src([
			'./node_modules/jquery/dist/jquery.min.js',
            './node_modules/moment/min/moment.min.js',
            './node_modules/fullcalendar/dist/fullcalendar.min.js',
            './node_modules/fullcalendar/dist/gcal.min.js',
		])
    	.pipe(concat('scripts.js'))
        .pipe(gulp.dest('./public/wallc/'));
});