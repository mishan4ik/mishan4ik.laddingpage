var gulp = require("gulp");
var less = require('gulp-less');
var mincss = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var path = require('path');


//подключение less
function lessfun() {
return gulp.src('app/less/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
}

//подключение js
function scripts(){

	
}
//подключение watch
function watch1(){
	browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
     //слежу за файлами watch
        gulp.watch('app/less/style.less', lessfun)
        gulp.watch("app/index.html").on('change', browserSync.reload);
}
//вызов функции
gulp.task('less1',lessfun);
gulp.task('watch',watch1);

gulp.task('build',gulp.series('less1','watch'));
