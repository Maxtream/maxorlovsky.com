var gulp = require('gulp');

require('require-dir')('./tasks');

gulp.task('default', () => {
	
});

gulp.task('dev', () => {
	return $.runSequence(
		[
	        "styles",
	        "scripts"
	        //"images"
		]);
});