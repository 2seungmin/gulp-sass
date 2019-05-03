var gulp = require('gulp'),
fileinclude = require('gulp-file-include'),
livereload = require('gulp-livereload'),
sass = require('gulp-sass');

// var function task = gulp.task;

gulp.task('file-include', function(){
	gulp.src(['index.html'])
	.pipe(fileinclude({
		preidx: '@@',
		basepath: '@file'
	}))
	.pipe(gulp.dest('./'));
});

gulp.task('sass', function() {
	return gulp.src('./scss/*.scss')
	.pipe(sass({outputStyle : 'compact'}).on('error', sass.logError))
	.pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function (){
	gulp.watch('./scss/*.scss', gulp.registry().get('sass'));
});

