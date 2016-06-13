var gulp  			= require('gulp'),
	sass 			= require('gulp-sass'),
	browserSync 	= require('browser-sync'),
	concat 			= require('gulp-concat'),
	uglify			= require('gulp-uglifyjs'),
	cssnano			= require('gulp-cssnano'),
	rename			= require('gulp-rename');

gulp.task('sass', function(){
	return gulp.src('app/sass/*.+(scss|sass)')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
	});

gulp.task('scripts', function(){
	return gulp.src([
		'app/vendor/jquery/dist/jquery.min.js'
		])
		.pipe(concat('vendor.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
		;
	});

gulp.task('css-vendor',['sass'], function(){
	return gulp.src('app/css/vendor.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'))
	});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false

		});
	});

gulp.task('watch',['browser-sync','css-vendor','scripts' ], function(){
	gulp.watch('app/sass/*.+(scss|sass)',['sass']); // при изменение файлов запускать такс sass
	gulp.watch('app/**/*.+(html|shtml)', browserSync.reload);
	gulp.watch('app/js/*.js', browserSync.reload);
	});


