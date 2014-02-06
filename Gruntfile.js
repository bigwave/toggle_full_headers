/* jshint node: true */


module.exports = function(grunt) {
    'use strict';


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compress: {
            main: {
                options: {
                    archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip',
                    mode: 'zip',
                    pretty: true
                },
                expand: true,
                cwd: 'src/',
                src: '**/*',
                dest: '../dist'
            }
            },


        clean: [ 'dist']
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['clean', 'compress']);
};

