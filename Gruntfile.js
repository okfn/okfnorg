module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'assets/css',
          ext: '.css'
        }]
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')
        ]
      },
      dist: {
        src: 'assets/css/*.css'
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'postcss:dist']
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default',['watch']);
};
