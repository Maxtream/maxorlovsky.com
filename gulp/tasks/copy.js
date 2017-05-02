const gulp = require('gulp');
const concat = require('gulp-concat');
const runSequence = require('run-sequence');

gulp.task('copy', function(cb) {
	return runSequence(
		['copy:assets', 'copy:html', 'copy:angular'],
	cb);
});

// Copy assets
gulp.task('copy:assets', function() {
  	return gulp.src('./fe/assets/**/*')
    	.pipe(gulp.dest('./public/dist/assets/'));
});

// Copy html files
gulp.task('copy:html', function() {
    return gulp.src('./fe/src/views/*.html')
    	.pipe(gulp.dest('./public/dist/html/'));
});

// Angular files
gulp.task('copy:angular', function() {
	return gulp.src([
			'./node_modules/angular/angular.min.js',
			'./node_modules/angular-*/angular-*.min.js'
		])
    	.pipe(concat('angular.js'))
        .pipe(gulp.dest('./public/dist/js/'));
});