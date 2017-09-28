var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});


gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
});


gulp.task('watch', ['browserSync', 'sass' ] , function() {
    gulp.watch('./sass/**/*.sass', ['sass']);
});