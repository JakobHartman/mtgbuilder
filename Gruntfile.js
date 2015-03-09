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
					{expand: true, cwd: 'app/assets', src: ['**'], dest: 'build/assets'},
					{expand: true, cwd: 'app/bower_components', src: ['**'], dest: 'build/bower_components'}
				]
			}
		},
		clean: ["build"],
		coffee: {
			build: {
				options: {
					join: true
				},
				files: {
					'build/javascripts/application.js': [
						'app/main.coffee',
						'app/controllers/*.coffee',
						'app/services/*.coffee'
					]
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Default task(s).
	grunt.registerTask('default', [
		'clean',
		'jade:compile',
		'coffee:build',
		'copy:build'
	]);

};
