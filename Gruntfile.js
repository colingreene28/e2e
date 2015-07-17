module.exports = function(grunt) {
    grunt.initConfig({
        /**
         * Transpile the .ts files into .js
         */
        ts: {
            default: {
                src: ['reference.d.ts', 'src/**/*.ts', 'typings/**/*.ts', '!node_modules/**/*.ts'],
                reference: 'reference.d.ts'
            }
        },

        /**
         * Generate typings definition
         */
        tsd: {
            default: {
                options: {
                    command: 'reinstall',
                    latest: true,
                    config: 'tsd.json'
                }
            }
        },

        /**
         * Protractor runner
         */
        protractor: {
            default: {
                options: {
                    configFile: 'conf.js',
                    keepAlive: false,
                    debug: true,
                    color: false
                }
            }
        }

    });

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['tsd', 'ts']);
};
