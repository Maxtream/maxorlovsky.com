const gulp = require('gulp');
 
gulp.task('html', function() {
  	gulp.src('./fe/app/views/*.html')
    	.pipe(gulp.dest('./public/dist/html/'));
});