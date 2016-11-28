大体积的图片可采用Gulp进行压缩(推荐用webpack,如果不会配置的话,可使用这个配置)

var gulp = require('gulp'),
    util = require('gulp-util'),
    // 压缩任务
    imagemin = require('gulp-imagemin'),					// 图片压缩
	pngquant = require('imagemin-pngquant');			    // PNG图片压缩
    // 图片压缩
    gulp.task('imagemin',function(){
		gulp.src('./src/images/*.{png,jpg,gif,ico}')
			.pipe(imagemin({
				progressive: true,
				svgPlugins: [{removeViewBox: false}],
				use: [pngquant()]
			}))
			.pipe(gulp.dest('./build/img'));
	});
    gulp.task('default', ['imagemin'])