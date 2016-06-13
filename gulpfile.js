var gulp  			= require('gulp'),
	sass 			= require('gulp-sass'),
	browserSync 	= require('browser-sync');

gulp.task('sass', function(){
	return gulp.src('app/sass/*.+(scss|sass)')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
	});

gulp.task('watch', function(){
	gulp.watch('app/sass/*.+(scss|sass)',['sass']); // при изменение файлов запускать такс sass
	});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		}

		});
	});