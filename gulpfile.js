'use strict'

var gulp = require('gulp'),
    del = require('del'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    livereload = require('gulp-livereload'),
    source = require('vinyl-source-stream'); 

var paths = {
  scripts: 'javascripts/*.js'
}

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify);
  b.add('javascripts/toRun.js');
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist/'))
})

gulp.task('clearDist', function(cb){
  del([
    'dist/bundle.js'
  ], cb)
});

gulp.task('watch', function(){
  livereload.listen();

  gulp.watch(paths.scripts, ['clearDist', 'browserify']);

})