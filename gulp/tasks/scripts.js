var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scripts', () => {
    gulp.src('./fe/src/**/*.js')
    	.pipe(uglify()),
    	.pipe(contact('scripts.js'))
        gulp.dest('./public/dist/assets/js/')
});