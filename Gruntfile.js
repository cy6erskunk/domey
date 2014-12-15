/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            myTarget: {
                files: {
                    'dist/domey.min.js': ['src/domey.js']
                }
            }
        },
        jasmine: {
            vanilla: {
                src: 'src/**/*.js',
                options: {
                    specs: 'spec/*.spec.js',
                    helpers: 'spec/*Helper.js'
                }
            },
            teamcity: {
                src: 'src/**/*.js',
                options: {
                    specs: 'spec/*.spec.js',
                    helpers: 'spec/*Helper.js',
                    template: require('grunt-template-jasmine-teamcity'),
                    templateOptions: {
                        output: 'jasmine.teamcity.log'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Default task
    grunt.registerTask('default', ['jasmine:vanilla']);

};
