module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build', ['clean', 'ts', 'sass']);

    grunt.initConfig({
        ts: {
            default: {
                src: ['src/**/*.ts'],
                outDir: 'dist'
            },
            options: {
                module: 'amd',
                fast: 'never',
                compiler: 'node_modules/jsx-typescript/bin/jsx-tsc'

            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.scss'],
                    dest: 'dist',
                    ext: '.css'
                }]
            }
        },
        watch: {
            ts: {
                files: ['src/**/*.ts'],
                tasks: ['ts'],
                options: {
                    spawn: false,
                },
            },
            sass: {
                files: ['src/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },
        clean: ["dist/src/*.js", "dist/**/*.map", "dist/style/*.css"]
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

}