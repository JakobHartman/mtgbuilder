module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		serve: {
			options: {
				'serve': {
					'path': './app'
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-serve');

	// Default task(s).
	grunt.registerTask('default', ['uglify']);


};
