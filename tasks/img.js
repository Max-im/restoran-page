'use strict';


const gulp 				= require('gulp');
const imagemin 		= require('gulp-imagemin');
const cache 			= require('gulp-cache');
const pngquant 		= require('imagemin-pngquant');


module.exports = function(options){
	
	return function(){
		
		return gulp.src(options.src)
		// .pipe( cache( imagemin(
		// 	{ 
		// 		interlaced: true,
		// 		progressive: true,
		// 		svgPlugins: [ { removeViewBox: false } ] ,
		// 		use: [ pngquant() ]
		// 	})
		// ))
		.pipe(gulp.dest('dist/img'));

	}
};
