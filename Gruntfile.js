module.exports = function(grunt) {
    grunt.initConfig({
        dirs: {
            css: 'assets/css',
            js: 'assets/js',
            output: 'assets/build',
            app: 'app'
        },

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: {
                    '<%= dirs.output %>/styles.css': '<%= dirs.output %>/styles.css'
                }
            }
        },

        concat: {
            /* Gathering all scss files together for easier sass conversion */
            css: {
                src: [
                    '<%= dirs.css %>/global.scss',
                    '<%= dirs.css %>/*.scss',
                ],
                dest: '<%= dirs.output %>/styles.css'
            },

            js : {
                src : [
                    '<%= dirs.js %>/angular.min.js',
                    '<%= dirs.js %>/*.js',
                    '<%= dirs.app %>/**/*.js'
                ],
                dest : '<%= dirs.output %>/scripts.js'
            }
        },

        /* Minifiying all css for combined file */
        cssmin: {
            css:{
                src: '<%= dirs.output %>/styles.css',
                dest: '<%= dirs.output %>/styles.css'
            }
        },

        uglify: {
            js:{
                files: {
                    '<%= dirs.output %>/scripts.js': ['<%= dirs.output %>/scripts.js']
                }
            }
        },

        jshint: {
            files: ['Gruntfile.js', '<%= dirs.js %>/*.js'],
            options: {
                ignores: ['<%= dirs.js %>/angular.js', '<%= dirs.js %>/angular-animate.min.js', '<%= dirs.js %>/angular-route.min.js'],
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

        watch: {
            css: {
                files: [
                    '<%= dirs.css %>/*.scss',
                ],
                tasks: [
                    'concat:css',
                    'sass',
                    'cssmin:css'
                ]
            },
            js: {
                files: [
                    '<%= dirs.app %>/**/*.js',
                    '<%= dirs.js %>/*.js',
                ],
                tasks: [
                    'concat:js',
                    'uglify:js'
                ]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-sass');
    
    grunt.registerTask('default', [
        'concat:css',
        'sass',
        'cssmin:css',
        //'jshint',
        'concat:js',
        'uglify:js'
    ]);
    
    grunt.registerTask('dev', [
        'default',
        'watch',
    ]);
};