var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('js.min.js', function () {
	return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/angular/angular.min.js',

    'node_modules/underscore/underscore-min.js',
		'node_modules/socket.io-client/dist/socket.io.js',

		'client/socket/socket.js',

    'client/components/components_bundle.js'
  ])
	.pipe(concat('js.min.js'))
  .pipe(uglify())
	.pipe(gulp.dest('client/dist'));
});

gulp.task('watch', function () {
	gulp.watch('client/components/components_bundle.js', ['js.min.js']);
});

gulp.task('default', [
	'js.min.js',
	'watch'
]);
