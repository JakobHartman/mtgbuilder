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
					src: [ '**/*.jade' ],
					dest: 'build',
					ext: '.html'
				}]
			}
		},
		copy: {
			build: {
				files: [
					{expand: true, cwd: 'app/', src: ['**'], dest: 'build/'}
				]
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task(s).
	grunt.registerTask('default', ['grunt-serve']);

};
