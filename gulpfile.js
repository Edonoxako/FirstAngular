var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var connect = require('gulp-connect');
var sass = require('gulp-sass');


// start connect webserver
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

// sass compiling
gulp.task('sass', function () {
  gulp.src('./app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'))
    .pipe(connect.reload());
});

// reload html
gulp.task('html', function () {
  gulp.src('./app/index.html')
    .pipe(connect.reload());
});

// reload js
gulp.task('js', function() {
	gulp.src('app/js/*.js')
	.pipe(connect.reload());
});

// bower dependencies
gulp.task('bower', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({
      directory: './app/bower_components'
    }))
    .pipe(gulp.dest('./app'));
});

// watch for changes in sources
gulp.task('watch', function(){
	gulp.watch('app/index.html', ['html']);
	gulp.watch('app/scss/*.scss', ['sass']);
	gulp.watch('app/js/*.js', ['js']);
  gulp.watch('app/views/*.html', ['html']);
  gulp.watch('bower.json', ['bower']);
});



// start dev
gulp.task('dev', ['connect', 'html', 'sass', 'js', 'watch']);

