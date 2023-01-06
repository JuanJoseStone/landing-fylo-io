
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// function buildStyles() {
//   return gulp.src('.src/assets/scss/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./src/assets/css'));
// };

// exports.buildStyles = buildStyles;
// exports.watch = function () {
//   gulp.watch('./src/assets/scss/**/*.scss', ['sass']);
// };

exports.default = () => {
  return gulp.src('./src/assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'));
}