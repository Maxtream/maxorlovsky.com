const gulp = require('gulp');
 
gulp.task('assets', function() {
  	gulp.src('./fe/assets/**/*')
    	.pipe(gulp.dest('./public/dist/assets/'));
});