var gulp = require('gulp');
var sass = require('gulp-sass');

//task para o sass
gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('assets'));
});

//task para o watch
gulp.task('watch', function () {
    gulp.watch('./sass/*.scss', ['sass']);
});

//task default gulp
gulp.task('default', ['sass', 'watch']);