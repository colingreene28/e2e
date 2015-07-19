module.exports = function(grunt) {
    grunt.initConfig({
        /**
         * Transpile the .ts files into .js
         */
        ts: {
            default: {
                src: ['reference.d.ts', 'src/**/*.ts', 'typings/**/*.ts', '!node_modules/**/*.ts'],
                compiler: "node_modules/typescript/bin/typescript.js",
                reference: 'reference.d.ts',
                options: {
                    module: 'commonjs'
                }
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
         *
         * TODO: This isn't is working at the moment, need to run regular protractor cmd
         */
        protractor: {
            default: {
                options: {
                    configFile: 'conf.js',
                    keepAlive: false,
                    debug: true,
                    color: false,
                    args: {
                        verbose: true
                    }
                }
            }
        }

    });

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['tsd', 'ts']);
};
