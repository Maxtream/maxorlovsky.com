const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('copy', function() {
	// Copy assets
  	gulp.src('./fe/assets/**/*')
    	.pipe(gulp.dest('./public/dist/assets/'));

    // Copy html files
    gulp.src('./fe/src/views/*.html')
    	.pipe(gulp.dest('./public/dist/html/'));

	// Angular files
	gulp.src([
			'./node_modules/angular/angular.min.js',
			'./node_modules/angular-*/angular-*.min.js'
		])
    	.pipe(concat('angular.js'))
        .pipe(gulp.dest('./public/dist/js/'));
});