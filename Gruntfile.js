/* jshint node: true */


module.exports = function(grunt) {
    'use strict';

 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compress: {
            main: {
                options: {
                    archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.xpi',
                    mode: 'zip'
                },
                files: [{
                    expand: true,
                    cwd: 'build/',
                    src: ['**']
                }]
            }
        },
        copy: {
            options: {
                process: function(content, path) {
                    return grunt.template.process(content);
                },
                 noProcess: '**/*.png'
            },
            common: {
                 expand: true,
                 cwd: 'src/',
                src: '**',
                dest: 'build/'
            }
        },

        clean: ['./dist/', './build/']
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['clean', 'copy:common', 'compress']);
};