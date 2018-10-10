var gulp = require('gulp'); 
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


var jsFiles = 
[
	'node_modules/angular/angular.min.js',
	'assets/js/jquery/jquery-1.10.1.min.js',
	'assets/bootstrap/js/bootstrap.min.js',
	'assets/js/idangerous.swiper-2.1.min.js',
	'assets/js/jquery.cycle2.min.js',
	'assets/js/jquery.easing.1.3.js',
	'assets/js/jquery.parallax-1.1.js',
	'assets/js/helper-plugins/jquery.mousewheel.min.js',
	'assets/js/owl.carousel.min.js',
	'assets/js/home.js',
	'assets/js/script.js'
],
    jsDest = 'dist/js';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('sc-external.js'))
        .pipe(gulp.dest(jsDest));
});