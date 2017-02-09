var gulp = require('gulp');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var order = require('gulp-order');

gulp.task('es6', function () {
  return gulp.src([ './public/js/*.js','./public/js/**/*.js'])
  .pipe(plumber())
  .pipe(babel({
    "presets": ["es2015"]
  }))
  .pipe(order([
    'app.js', '*.js'
  ]))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('public/dist'));
})

gulp.task('sass', function() {
  return gulp.src('./public/styles/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('all.css'))
  .pipe(gulp.dest('public/dist'))
})

gulp.task('watch', function() {
  gulp.watch('./public/styles/*.scss', ['sass'])
  // gulp.watch('./styles/**/*.scss', ['sass'])
  gulp.watch('./public/js/*.js', ['es6'])
});

gulp.task('default', ['watch', 'es6', 'sass'])
