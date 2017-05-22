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
          includePaths: ['src/sass', 'node_modules/bootstrap-sass/assets/stylesheets']
        },
        files: {
          'docs-theme/css/base.css': 'docs-theme/sass/base.scss'
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
    },
    copy: {
      dev: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/bootstrap-sass/assets/fonts',
            src: '**',
            dest: 'docs-theme/fonts/'
          },
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('dev', ['copy','concurrent:devServer']);
}