module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		serve: {
			options: {
				serve: {
					path: './build'
				}
			}
		},
		jade: {
			compile: {
				options: {
					pretty: true
				},
				files: [{
					expand: true,
					cwd: 'app',
					src: [ '**/*.jade'  ],
					dest: 'build',
					ext: '.html'
				}]
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-jade');

	// Default task(s).
	grunt.registerTask('default', ['grunt-serve']);

};
