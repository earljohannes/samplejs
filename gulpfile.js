var gulp = require('nodemon');
var nodemon = require('gulp-nodemon');



gulp.task('default', function(){
	nodemon({
		script : 'app.js',
		ext : 'js,',
		env : 
		{
			port : 8000 
		},
		igonre : ['./node_modules/**']

	}).on('restart', function(){
		console.log('Restarting');
	});

});