const gulp = require('gulp');
const runSequence = require('run-sequence');

require('require-dir')('./tasks');

gulp.task('default', ['styles', 'scripts', 'copy']);

gulp.task('build', (cb) => {
	return runSequence(
		'lint:script',
		['styles', 'scripts', 'copy'],
	cb);
});