module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    express: {
      dev: {
        options: {
          script: './app.js'
        }
      }
    },
    watch: {
      tasks:  [ 'express:dev' ],
      options: {
        livereload: true,
        nospawn: true
      },
      files: [
        '**/*.ejs',
        '**/*.js'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [ 'express:dev', 'watch' ]);
};