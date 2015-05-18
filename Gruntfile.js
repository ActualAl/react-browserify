module.exports = function(grunt) {

  //Project conf.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    react: {
      combined_file_output: {
        files: {
          'commentbox.js' : ['commentbox.jsx' ]
        }
      }
    },
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      app: {
        src: 'main.js',
        dest: 'output.js'
      }
    },
    watch: {
      scripts: {
        files: ['*.js', '*.jsx'],
        tasks: ['default']
      },
    },
    //copy:{ main : {
    //    file: [
    //      {expand: true, src :['src/**/*'], dest: 'dest/'}
    //    ]
    //  }
    //}
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-react');
  //grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['react', 'browserify']);

};
