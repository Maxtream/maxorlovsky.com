const gulp = require('gulp');
const runSequence = require('run-sequence');

require('require-dir')('./tasks');

gulp.task('default', ['styles', 'scripts']);

gulp.task('dev', (cb) => {
	runSequence(
		'lint:script',
		['styles', 'scripts', 'assets', 'html'],
	cb);
});