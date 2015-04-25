var gulp = require('gulp'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');

var talk = ['index.html', 'images/*'];

gulp.task('webserver', function () {
  connect.server({
    livereload: true
  });
});
gulp.task('update', function () {
  gulp.src(talk)
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  var server = livereload();
  gulp.watch(talk, ['update']);
});
gulp.task('default', ['webserver', 'update', 'watch']);
