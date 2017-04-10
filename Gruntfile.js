module.exports = function (grunt) {
  grunt.initConfig({
    shell: {
      mkdocsServer: {
        options: {
          stdout: true
        },
        command: 'mkdocs serve'
      }
    },
    sass: {
      dev: {
        options: {
          includePaths: ['src', 'node_modules/bootstrap-sass/assets/stylesheets']
        },
        files: {
          'docs-theme/css/hel-bootstrap.css': 'src/sass/hel-bootstrap-theme.scss'
        }
      }
    },
    watch: {
      files: '**/*.scss',
      tasks: ['sass']
    },
    concurrent: {
      devServer: {
        tasks: ['watch','shell:mkdocsServer'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('dev', ['concurrent:devServer']);
}