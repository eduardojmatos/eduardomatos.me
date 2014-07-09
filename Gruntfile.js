<<<<<<< HEAD
=======
// # Task automation for Ghost
//
// Run various tasks when developing for and working with Ghost.
//
// **Usage instructions:** can be found in the [Custom Tasks](#custom%20tasks) section or by running `grunt --help`.
//
// **Debug tip:** If you have any problems with any Grunt tasks, try running them with the `--verbose` command
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6
var path           = require('path'),
    colors         = require('colors'),
    fs             = require('fs'),
<<<<<<< HEAD
    _              = require('underscore'),
    spawn          = require('child_process').spawn,
    buildDirectory = path.resolve(process.cwd(), '.build'),
    distDirectory  = path.resolve(process.cwd(), '.dist'),
    configLoader   = require('./core/config-loader.js'),
=======
    _              = require('lodash'),
    buildDirectory = path.resolve(process.cwd(), '.build'),
    distDirectory  = path.resolve(process.cwd(), '.dist'),
    bootstrap      = require('./core/bootstrap'),
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6

    // ## Build File Patterns
    // A list of files and patterns to include when creating a release zip.
    // This is read from the `.npmignore` file and all patterns are inverted as the `.npmignore`
    // file defines what to ignore, whereas we want to define what to include.
    buildGlob = (function () {
        /*jslint stupid:true */
        return fs.readFileSync('.npmignore', {encoding: 'utf8'}).split('\n').map(function (pattern) {
            if (pattern[0] === '!') {
                return pattern.substr(1);
            }
            return '!' + pattern;
        });
    }()),

    configureGrunt = function (grunt) {

<<<<<<< HEAD
        // load all grunt tasks
        require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
=======
        // *This is not useful but required for jshint*
        colors.setTheme({silly: 'rainbow'});

        // #### Load all grunt tasks
        //
        // Find all of the task which start with `grunt-` and load them, rather than explicitly declaring them all
        require('matchdep').filterDev(['grunt-*', '!grunt-cli']).forEach(grunt.loadNpmTasks);
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6

        var cfg = {
            // #### Common paths used by tasks
            paths: {
                build: buildDirectory,
                nightlyBuild: path.join(buildDirectory, 'nightly'),
                weeklyBuild: path.join(buildDirectory, 'weekly'),
                buildBuild: path.join(buildDirectory, 'build'),
                dist: distDirectory,
                nightlyDist: path.join(distDirectory, 'nightly'),
                weeklyDist: path.join(distDirectory, 'weekly'),
                buildDist: path.join(distDirectory, 'build'),
                releaseDist: path.join(distDirectory, 'release')
            },
            // Standard build type, for when we have nightlies again.
            buildType: 'Build',
            // Load package.json so that we can create correctly versioned releases.
            pkg: grunt.file.readJSON('package.json'),

<<<<<<< HEAD
            // Watch files and livereload in the browser during development
=======
            // ### grunt-contrib-watch
            // Watch files and livereload in the browser during development.
            // See the [grunt dev](#live%20reload) task for how this is used.
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6
            watch: {
                shared: {
                    files: ['core/shared/**/*.js'],
                    tasks: ['concat:dev']
                },
                'emberTemplates': {
                    files: ['core/client/**/*.hbs'],
                    tasks: ['emberTemplates:dev']
                },
                ember: {
                    files: ['core/client/**/*.js'],
                    tasks: ['clean:tmp', 'transpile', 'concat_sourcemap']
                },
                'ghost-ui': {
                    files: [
                        'bower_components/ghost-ui/dist/css/*.css'
                    ],
                    tasks: ['copy:dev']
                },
                livereload: {
                    files: [
                        'content/themes/casper/css/*.css',
                        'content/themes/casper/js/*.js',
                        'core/client/assets/css/*.css',
                        'core/built/scripts/*.js'
                    ],
                    options: {
                        livereload: true
                    }
                },
                express: {
                    files:  ['core/server.js', 'core/server/**/*.js'],
                    tasks:  ['express:dev'],
                    options: {
                        // **Note:** Without this option specified express won't be reloaded
                        nospawn: true
                    }
                }
            },

<<<<<<< HEAD
            // Start our server in development
=======
            // ### grunt-express-server
            // Start a Ghost expess server for use in development and testing
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6
            express: {
                options: {
                    script: 'index.js'
                },

                dev: {
                    options: {}
                },
                test: {
                    options: {
                        node_env: 'testing'
                    }
                }
            },

            // ### grunt-contrib-jshint
            // Linting rules, run as part of `grunt validate`. See [grunt validate](#validate) and its subtasks for
            // more information.
            jshint: {
                // Linting rules for server side or shared javascript code
                server: {
                    options: {
                        jshintrc: '.jshintrc'
                    },
                    files: {
                        src: [
                            '*.js',
                            'core/*.js',
                            'core/server/**/*.js',
                            'core/shared/**/*.js',
                            '!core/shared/vendor/**/*.js',
                            '!core/shared/lib/**/*.js'
                        ]
                    }
                },
                // Linting rules for client side javascript code
                client: {
                    options: {
                        jshintrc: 'core/client/.jshintrc'
                    },
                    files: {
                        src: [
                            'core/client/**/*.js',
                            '!core/client/assets/vendor/**/*.js',
                            '!core/client/tpl/**/*.js'
                        ]
                    }
                }
            },

<<<<<<< HEAD
=======
            // ### grunt-mocha-cli
            // Configuration for the mocha test runner, used to run unit, integration and route tests as part of
            // `grunt validate`. See [grunt validate](#validate) and its sub tasks for more information.
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6
            mochacli: {
                options: {
                    ui: 'bdd',
                    reporter: 'spec',
                    timeout: '15000'
                },

<<<<<<< HEAD
                all: {
                    src: ['core/test/unit/**/*_spec.js']
                },

                api: {
                    src: ['core/test/unit/**/api*_spec.js']
                },

                client: {
                    src: ['core/test/unit/**/client*_spec.js']
                },

=======
                // #### All Unit tests
                unit: {
                    src: ['core/test/unit/**/*_spec.js']
                },

                // ##### Groups of unit tests
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6
                server: {
                    src: ['core/test/unit/**/server*_spec.js']
                },

                showdown: {
                    src: ['core/test/unit/**/showdown*_spec.js']
                },

                perm: {
                    src: ['core/test/unit/**/permissions_spec.js']
                },

                migrate: {
                    src: [
                        'core/test/unit/**/export_spec.js',
                        'core/test/unit/**/import_spec.js'
                    ]
                },

                storage: {
                    src: ['core/test/unit/**/storage*_spec.js']
                },

                // #### All Integration tests
                integration: {
                    src: [
                        'core/test/integration/**/model*_spec.js',
                        'core/test/integration/**/api*_spec.js',
                        'core/test/integration/*_spec.js'
                    ]
                },

                // ##### Model integration tests
                model: {
                    src: ['core/test/integration/**/model*_spec.js']
                },

                // ##### API integration tests
                api: {
                    src: ['core/test/integration/**/api*_spec.js']
                },

                // #### All Route tests
                routes: {
                    src: ['core/test/functional/routes/**/*_test.js']
                }
            },

<<<<<<< HEAD

=======
            // ### grunt-shell
            // Command line tools where it's easier to run a command directly than configure a grunt plugin
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6
            shell: {
                // #### Run bower install
                // Used as part of `grunt init`. See the section on [Building Assets](#building%20assets) for more
                // information.
                bower: {
                    command: path.resolve(__dirname.replace(' ', '\\ ') + '/node_modules/.bin/bower install'),
                    options: {
                        stdout: true
                    }
                },
                // #### Generate coverage report
                // See the `grunt test-coverage` task in the section on [Testing](#testing) for more information.
                coverage: {
                    command: function () {
                        // **Note:** will only work on windows if mocha is globally installed
                        var cmd = !!process.platform.match(/^win/) ? 'mocha' : './node_modules/mocha/bin/mocha';
                        return cmd +
                            ' --timeout 15000 --reporter html-cov > coverage.html ./core/test/blanket_coverage.js';
                    },
                    execOptions: {
                        env: 'NODE_ENV=' + process.env.NODE_ENV
                    }
                }
            },

<<<<<<< HEAD
            handlebars: {
                core: {
=======
            // ### grunt-ember-templates
            // Compiles handlebar templates for ember
            emberTemplates: {
                dev: {
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6
                    options: {
                        templateBasePath: /core\/client\//,
                        templateFileExtensions: /\.hbs/,
                        templateRegistration: function (name, template) {
                            return grunt.config.process('define(\'ghost/') +
                                name + '\', [\'exports\'], function(__exports__){ __exports__[\'default\'] = ' +
                                template + '; });';
                        }
                    },
                    files: {
                        'core/built/scripts/templates-ember.js': 'core/client/templates/**/*.hbs'
                    }
                }
            },

            // ### grunt-es6-module-transpiler
            // Compiles Ember es6 modules
            transpile: {
                client: {
                    type: 'amd',
                    moduleName: function (path) {
                        return 'ghost/' + path;
                    },
                    files: [{
                        expand: true,
                        cwd: 'core/client/',
                        src: ['**/*.js'],
                        dest: '.tmp/ember-transpiled/'
                    }]
                }
            },

            // ### grunt-es6-module-transpiler
            // Compiles Ember es6 modules
            concat_sourcemap: {
                client: {
                    src: ['.tmp/ember-transpiled/**/*.js'],
                    dest: 'core/built/scripts/ghost-dev-ember.js',
                    options: {
                        sourcesContent: true
                    }
                }
            },

<<<<<<< HEAD
            groc: {
=======
            // ### grunt-docker
            // Generate documentation from code
            docker: {
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6
                docs: {
                    dest: 'docs',
                    src: ['.'],
                    options: {
                        onlyUpdated: true,
                        exclude: 'node_modules,.git,.tmp,bower_components,content,*built,*test,*doc*,*vendor,' +
                            'config.js,coverage.html,.travis.yml,*.min.css,screen.css',
                        extras: ['fileSearch']
                    }
                }
            },

<<<<<<< HEAD
            clean: {
                build: {
                    src: ['<%= paths.buildBuild %>/**']
=======
            // ### grunt-contrib-clean
            // Clean up files as part of other tasks
            clean: {
                built: {
                    src: ['core/built/**']
                },
                release: {
                    src: ['<%= paths.releaseBuild %>/**']
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6
                },
                test: {
                    src: ['content/data/ghost-test.db']
                },
                tmp: {
                    src: ['.tmp/**']
                }
            },

<<<<<<< HEAD
=======
            // ### grunt-contrib-copy
            // Copy files into their correct locations as part of building assets, or creating release zips
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6
            copy: {
                dev: {
                    files: [{
                        cwd: 'bower_components/jquery/dist/',
                        src: 'jquery.js',
                        dest: 'core/built/public/',
                        expand: true
                    }, {
                        cwd: 'bower_components/ghost-ui/dist/',
                        src: ['**'],
                        dest: 'core/client/assets/',
                        expand: true
                    }]
                },
                prod: {
                    files: [{
                        cwd: 'bower_components/jquery/dist/',
                        src: 'jquery.js',
                        dest: 'core/built/public/',
                        expand: true
                    }, {
                        cwd: 'bower_components/ghost-ui/dist/',
                        src: ['**'],
                        dest: 'core/client/assets/',
                        expand: true
                    }]
                },
                release: {
                    files: [{
                        cwd: 'bower_components/jquery/dist/',
                        src: 'jquery.js',
                        dest: 'core/built/public/',
                        expand: true
                    }, {
                        cwd: 'bower_components/ghost-ui/dist/',
                        src: ['**'],
                        dest: 'core/client/assets/',
                        expand: true
                    }, {
                        expand: true,
                        src: buildGlob,
                        dest: '<%= paths.buildBuild %>/'
                    }]
                }
            },

<<<<<<< HEAD
=======
            // ### grunt-contrib-compress
            // Zip up files for builds / releases
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6
            compress: {
                nightly: {
                    options: {
                        archive: '<%= paths.nightlyDist %>/Ghost-Nightly-<%= pkg.version %>.zip'
                    },
                    expand: true,
                    cwd: '<%= paths.nightlyBuild %>/<%= pkg.version %>/',
                    src: ['**']
                },
                weekly: {
                    options: {
                        archive: '<%= paths.weeklyDist %>/Ghost-Weekly-<%= pkg.version %>.zip'
                    },
                    expand: true,
                    cwd: '<%= paths.weeklyBuild %>/<%= pkg.version %>/',
                    src: ['**']
                },
                build: {
                    options: {
                        archive: '<%= paths.buildDist %>/Ghost-Build.zip'
                    },
                    expand: true,
                    cwd: '<%= paths.buildBuild %>/',
                    src: ['**']
                },
                release: {
                    options: {
                        archive: '<%= paths.releaseDist %>/Ghost-<%= pkg.version %>.zip'
                    },
                    expand: true,
                    cwd: '<%= paths.buildBuild %>/',
                    src: ['**']
                }
            },

<<<<<<< HEAD
            bump: {
                options: {
                    tagName: '%VERSION%',
                    commitMessage: '<%= buildType %> Release %VERSION%',
                    tagMessage: '<%= buildType %> Release %VERSION%',
                    pushTo: 'origin build'
                }
            },

=======
            // ### grunt-contrib-concat
            // concatenate multiple JS files into a single file ready for use
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6
            concat: {
                'dev': {
                    nonull: true,
                    dest: 'core/built/scripts/vendor-ember.js',
                    src: [
                        'bower_components/loader.js/loader.js',
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/lodash/dist/lodash.js',
                        'bower_components/handlebars/handlebars.js',
                        'bower_components/ember/ember.js',
                        'bower_components/ember-data/ember-data.js',
                        'bower_components/ember-resolver/dist/ember-resolver.js',
                        'bower_components/ic-ajax/dist/globals/main.js',
                        'bower_components/ember-load-initializers/ember-load-initializers.js',
                        'bower_components/validator-js/validator.js',
                        'bower_components/codemirror/lib/codemirror.js',
                        'bower_components/codemirror/addon/mode/overlay.js',
                        'bower_components/codemirror/mode/markdown/markdown.js',
                        'bower_components/codemirror/mode/gfm/gfm.js',
                        'bower_components/showdown/src/showdown.js',
                        'bower_components/moment/moment.js',
                        'bower_components/keymaster/keymaster.js',
                        'bower_components/device/lib/device.js',
                        'bower_components/jquery-ui/ui/jquery-ui.js',
                        'bower_components/jquery-file-upload/js/jquery.fileupload.js',
                        'bower_components/fastclick/lib/fastclick.js',
                        'bower_components/nprogress/nprogress.js',
                        'bower_components/ember-simple-auth/ember-simple-auth.js',
                        'bower_components/ember-simple-auth/ember-simple-auth-oauth2.js',

                        'core/shared/lib/showdown/extensions/ghostimagepreview.js',
                        'core/shared/lib/showdown/extensions/ghostgfm.js'
                    ]
                }
            },

<<<<<<< HEAD
=======
            // ### grunt-contrib-uglify
            // Minify concatenated javascript files ready for production
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6
            uglify: {
                prod: {
                    files: {
                        'core/built/public/jquery.min.js': 'core/built/public/jquery.js'
                    }
                }
            },

            // ### grunt-update-submodules
            // Grunt task to update git submodules
            'update_submodules': {
                default: {
                    options: {
                        params: '--init'
                    }
                }
            }
        };

        // Load the configuration
        grunt.initConfig(cfg);

<<<<<<< HEAD
        grunt.registerTask('setTestEnv', 'Use "testing" Ghost config; unless we are running on travis (then show queries for debugging)', function () {
            process.env.NODE_ENV = process.env.TRAVIS ? 'travis' : 'testing';
        });

        grunt.registerTask('loadConfig', function () {
            var done = this.async();
            configLoader.loadConfig().then(function () {
                done();
            });
        });

        grunt.registerTask('updateCurrentPackageInfo', 'Update the package information after changes', function () {
            cfg.pkg = grunt.file.readJSON('package.json');
        });

        grunt.registerTask('setCurrentBuildType', function (type) {
            cfg.buildType = type;
        });

        grunt.registerTask('spawn-casperjs', function () {
=======
        // ## Utilities
        //
        // ### Spawn Casper.js
        // Custom test runner for our Casper.js functional tests
        // This really ought to be refactored into a separate grunt task module
        grunt.registerTask('spawnCasperJS', function (target) {

            target = _.contains(['client', 'frontend'], target) ? target + '/' : undefined;

>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6
            var done = this.async(),
                options = ['host', 'noPort', 'port', 'email', 'password'],
                args = ['test']
                    .concat(grunt.option('target') || target || ['client/', 'frontend/'])
                    .concat(['--includes=base.js', '--log-level=debug', '--port=2369']);

            // Forward parameters from grunt to casperjs
            _.each(options, function processOption(option) {
                if (grunt.option(option)) {
                    args.push('--' + option + '=' + grunt.option(option));
                }
            });

            if (grunt.option('fail-fast')) {
                args.push('--fail-fast');
            }

            // Show concise logs in Travis as ours are getting too long
            if (grunt.option('concise') || process.env.TRAVIS) {
                args.push('--concise');
            } else {
                args.push('--verbose');
            }

            grunt.util.spawn({
                cmd: 'casperjs',
                args: args,
                opts: {
                    cwd: path.resolve('core/test/functional'),
                    stdio: 'inherit'
                }
            }, function (error, result, code) {
                /*jshint unused:false*/
                if (error) {
                    grunt.fail.fatal(result.stdout);
                }
                grunt.log.writeln(result.stdout);
                done();
            });
        });

        // # Custom Tasks

        // Ghost has a number of useful tasks that we use every day in development. Tasks marked as *Utility* are used
        // by grunt to perform current actions, but isn't useful to developers.
        //
        // Skip ahead to the section on:
        //
        // * [Building assets](#building%20assets):
        //     `grunt init`, `grunt` & `grunt prod` or live reload with `grunt dev`
        // * [Testing](#testing):
        //     `grunt validate`, the `grunt test-*` sub-tasks or generate a coverage report with `grunt test-coverage`.

        // ### Help
        // Run `grunt help` on the commandline to get a print out of the available tasks and details of
        // what each one does along with any available options. This is an alias for `grunt --help`
        grunt.registerTask('help',
            'Outputs help information if you type `grunt help` instead of `grunt --help`',
            function () {
                console.log('Type `grunt --help` to get the details of available grunt tasks, ' +
                    'or alternatively visit https://github.com/TryGhost/Ghost/wiki/Grunt-Toolkit');
            });

        // ### Documentation
        // Run `grunt docs` to generate annotated source code using the documentation described in the code comments.
        grunt.registerTask('docs', 'Generate Docs', ['docker']);


        // ## Testing

        // Ghost has an extensive set of test suites. The following section documents the various types of tests
        // and how to run them.
        //
        // TLDR; run `grunt validate`

        // #### Set Test Env *(Utility Task)*
        // Set the NODE_ENV to 'testing' unless the environment is already set to TRAVIS.
        // This ensures that the tests get run under the correct environment, using the correct database, and
        // that they work as expected. Trying to run tests with no ENV set will throw an error to do with `client`.
        grunt.registerTask('setTestEnv',
            'Use "testing" Ghost config; unless we are running on travis (then show queries for debugging)',
            function () {
                process.env.NODE_ENV = process.env.TRAVIS ? process.env.NODE_ENV : 'testing';
                cfg.express.test.options.node_env = process.env.NODE_ENV;
            });

        // #### Load Config *(Utility Task)*
        // Make sure that we have a `config.js` file when running tests
        // Ghost requires a `config.js` file to specify the database settings etc. Ghost comes with an example file:
        // `config.example.js` which is copied and renamed to `config.js` by the bootstrap process
        grunt.registerTask('loadConfig', function () {
            var done = this.async();
            bootstrap().then(function () {
                done();
            }).catch(function (err) {
                grunt.fail.fatal(err.stack);
            });
        });

        // ### Validate
        // **Main testing task**
        //
        // `grunt validate` will build, lint and test your local Ghost codebase.
        //
        // `grunt validate` is one of the most important and useful grunt tasks that we have available to use. It
        // manages the build of your environment and then calls `grunt test`
        //
        // `grunt validate` is called by `npm test` and is used by Travis.
        grunt.registerTask('validate', 'Run tests and lint code',
            ['init', 'test']);

        // ### Test
        // **Main testing task**
        //
        // `grunt test` will lint and test your pre-built local Ghost codebase.
        //
        // `grunt test` runs jshint as well as the 4 test suites. See the individual sub tasks below for details of
        // each of the test suites.
        //
        grunt.registerTask('test', 'Run tests and lint code',
            ['jshint', 'test-routes', 'test-unit', 'test-integration', 'test-functional']);

        // ### Unit Tests *(sub task)*
        // `grunt test-unit` will run just the unit tests
        //
        // Provided you already have a `config.js` file, you can run individual sections from
        // [mochacli](#grunt-mocha-cli) by running:
        //
        // `NODE_ENV=testing grunt mochacli:section`
        //
        // If you need to run an individual unit test file, you can do so, providing you have mocha installed globally
        // by using a command in the form:
        //
        // `NODE_ENV=testing mocha --timeout=15000 --ui=bdd --reporter=spec core/test/unit/config_spec.js`
        //
        // Unit tests are run with [mocha](http://visionmedia.github.io/mocha/) using
        // [should](https://github.com/visionmedia/should.js) to describe the tests in a highly readable style.
        // Unit tests do **not** touch the database.
        // A coverage report can be generated for these tests using the `grunt test-coverage` task.
        grunt.registerTask('test-unit', 'Run unit tests (mocha)',
            ['clean:test', 'setTestEnv', 'loadConfig', 'mochacli:unit']);

        // ### Integration tests *(sub task)*
        // `grunt test-integration` will run just the integration tests
        //
        // Provided you already have a `config.js` file, you can run just the model integration tests by running:
        //
        // `NODE_ENV=testing grunt mochacli:model`
        //
        // Or just the api integration tests by running:
        //
        // `NODE_ENV=testing grunt mochacli:api`
        //
        // Integration tests are run with [mocha](http://visionmedia.github.io/mocha/) using
        // [should](https://github.com/visionmedia/should.js) to describe the tests in a highly readable style.
        // Integration tests are different to the unit tests because they make requests to the database.
        //
        // Their purpose is to test that both the api and models behave as expected when the database layer is involved.
        // These tests are run against sqlite3, mysql and pg on travis and ensure that differences between the databases
        // don't cause bugs. At present, pg often fails and is not officially supported.
        //
        // A coverage report can be generated for these tests using the `grunt test-coverage` task.
        grunt.registerTask('test-integration', 'Run integration tests (mocha + db access)',
            ['clean:test', 'setTestEnv', 'loadConfig', 'mochacli:integration']);

        // ### Route tests *(sub task)*
        // `grunt test-routes` will run just the route tests
        //
        // If you need to run an individual route test file, you can do so, providing you have a `config.js` file and
        // mocha installed globally by using a command in the form:
        //
        // `NODE_ENV=testing mocha --timeout=15000 --ui=bdd --reporter=spec core/test/functional/routes/admin_test.js`
        //
        // Route tests are run with [mocha](http://visionmedia.github.io/mocha/) using
        // [should](https://github.com/visionmedia/should.js) and [supertest](https://github.com/visionmedia/supertest)
        // to describe and create the tests.
        //
        // Supertest enables us to describe requests that we want to make, and also describe the response we expect to
        // receive back. It works directly with express, so we don't have to run a server to run the tests.
        //
        // The purpose of the route tests is to ensure that all of the routes (pages, and API requests) in Ghost
        // are working as expected, including checking the headers and status codes received. It is very easy and
        // quick to test many permutations of routes / urls in the system.
        grunt.registerTask('test-routes', 'Run functional route tests (mocha)',
            ['clean:test', 'setTestEnv', 'loadConfig', 'mochacli:routes']);

        // ### Functional tests *(sub task)*
        // `grunt test-functional` will run just the functional tests
        //
        // You can use the `--target` argument to run any individual test file, or the admin or frontend tests:
        //
        // `grunt test-functional --target=admin/editor_test.js` - run just the editor tests
        //
        // `grunt test-functional --target=admin/` - run all of the tests in the admin directory
        //
        // Functional tests are run with [phantom.js](http://phantomjs.org/) and defined using the testing api from
        // [casper.js](http://docs.casperjs.org/en/latest/testing.html).
        //
        // An express server is started with the testing environment set, and then a headless phantom.js browser is
        // used to make requests to that server. The Casper.js API then allows us to describe the elements and
        // interactions we expect to appear on the page.
        //
        // The purpose of the functional tests is to ensure that Ghost is working as is expected from a user perspective
        // including buttons and other important interactions in the admin UI.
        grunt.registerTask('test-functional', 'Run functional interface tests (CasperJS)',
            ['clean:test', 'setTestEnv', 'loadConfig', 'express:test', 'spawnCasperJS', 'express:test:stop']
        );

        // ### Coverage
        // `grunt test-coverage` will generate a report for the Unit and Integration Tests.
        //
        // This is not currently done as part of CI or any build, but is a tool we have available to keep an eye on how
        // well the unit and integration tests are covering the code base.
        // Ghost does not have a minimum coverage level - we're more interested in ensuring important and useful areas
        // of the codebase are covered, than that the whole codebase is covered to a particular level.
        //
        // Key areas for coverage are: helpers and theme elements, apps / GDK, the api and model layers.
        grunt.registerTask('test-coverage', 'Generate unit and integration (mocha) tests coverage report',
            ['clean:test', 'setTestEnv', 'loadConfig', 'shell:coverage']);


        // ## Building assets
        //
        // Ghost's GitHub repository contains the un-built source code for Ghost. If you're looking for the already
        // built release zips, you can get these from the [release page](https://github.com/TryGhost/Ghost/releases) on
        // GitHub or from https://ghost.org/download. These zip files are created using the [grunt release](#release)
        // task.
        //
        // If you want to work on Ghost core, or you want to use the source files from GitHub, then you have to build
        // the Ghost assets in order to make them work.
        //
        // There are a number of grunt tasks available to help with this. Firstly after fetching an updated version of
        // the Ghost codebase, after running `npm install`, you will need to run [grunt init](#init%20assets).
        //
        // For production blogs you will need to run [grunt prod](#production%20assets).
        //
        // For updating assets during development, the tasks [grunt](#default%20asset%20build) and
        // [grunt dev](#live%20reload) are available.
        //

        // #### Master Warning *(Utility Task)*
        // Warns git users not ot use the `master` branch in production.
        // `master` is an unstable branch and shouldn't be used in production as you run the risk of ending up with a
        // database in an unrecoverable state. Instead there is a branch called `stable` which is the equivalent of the
        // release zip for git users.
        grunt.registerTask('master-warn',
            'Outputs a warning to runners of grunt prod, that master shouldn\'t be used for live blogs',
            function () {
                console.log('>', 'Always two there are, no more, no less. A master and a'.red,
                        'stable'.red.bold + '.'.red);
                console.log('Use the', 'stable'.bold, 'branch for live blogs.', 'Never'.bold, 'master!');
            });

        // ### Ember Build *(Utility Task)*
        // All tasks related to building the Ember client code including transpiling ES6 modules and building templates
        grunt.registerTask('emberBuild', 'Build Ember JS & templates for development',
            ['clean:tmp', 'emberTemplates:dev', 'transpile', 'concat_sourcemap']);


        // ### Init assets
        // `grunt init` - will run an initial asset build for you
        //
        // Grunt init runs `bower install` as well as the standard asset build tasks which occur when you run just
        // `grunt`. This fetches the latest client side dependencies, and moves them into their proper homes.
        //
        // This task is very important, and should always be run and when fetching down an updated code base just after
        // running `npm install`.
        //
        // `bower` does have some quirks, such as not running as root. If you have problems please try running
        // `grunt init --verbose` to see if there are any errors.
        grunt.registerTask('init', 'Prepare the project for development',
            ['shell:bower', 'update_submodules', 'default']);

        // ### Production assets
        // `grunt prod` - will build the minified assets used in production.
        //
        // It is otherwise the same as running `grunt`, but is only used when running Ghost in the `production` env.
        grunt.registerTask('prod', 'Build JS & templates for production',
            ['concat', 'uglify', 'copy:prod', 'master-warn']);

        // ### Default asset build
        // `grunt` - default grunt task
        //
        // Compiles concatenates javascript files for the admin UI into a handful of files instead
        // of many files, and makes sure the bower dependencies are in the right place.
        grunt.registerTask('default', 'Build JS & templates for development',
            ['concat', 'copy:dev', 'emberBuild']);

        // ### Live reload
        // `grunt dev` - build assets on the fly whilst developing
        //
        // If you want Ghost to live reload for you whilst you're developing, you can do this by running `grunt dev`.
        // This works hand-in-hand with the [livereload](http://livereload.com/) chrome extension.
        //
        // `grunt dev` manages starting an express server and restarting the server whenever core files change (which
        // require a server restart for the changes to take effect) and also manage reloading the browser whenever
        // frontend code changes.
        //
        // Note that the current implementation of watch only works with casper, not other themes.
        grunt.registerTask('dev', 'Dev Mode; watch files and restart server on changes',
           ['concat', 'copy:dev', 'emberBuild', 'express:dev', 'watch']);

        // ### Release
        // Run `grunt release` to create a Ghost release zip file.
        // Uses the files specified by `.npmignore` to know what should and should not be included.
        // Runs the asset generation tasks for both development and production so that the release can be used in
        // either environment, and packages all the files up into a zip.
        grunt.registerTask('release',
            'Release task - creates a final built zip\n' +
<<<<<<< HEAD
            ' - Do our standard build steps (handlebars, etc)\n' +
            ' - Generate changelog for the past 14 releases\n' +
            ' - Copy files to build-folder/#/#{version} directory\n' +
            ' - Clean out unnecessary files (travis, .git*, .af*, .groc*)\n' +
            ' - Zip files in build folder to dist-folder/#{version} directory',
            [
                'shell:bower',
                'handlebars',
                'concat',
                'uglify',
                'bump:build',
                'updateCurrentPackageInfo',
                'changelog',
                'copy:nightly',
                'compress:nightly'
            ]);

        grunt.registerTask('weekly', [
            'setCurrentBuildType:Weekly',
            'shell:bourbon',
            'sass:compress',
            'handlebars',
            'concat',
            'uglify',
            'bump:build',
            'updateCurrentPackageInfo',
            'changelog',
            'copy:weekly',
            'compress:weekly'
        ]);

        grunt.registerTask('build', [
            'shell:bourbon',
            'sass:compress',
            'handlebars',
            'concat',
            'uglify',
            'changelog',
            'clean:build',
            'copy:build',
            'compress:build'
        ]);

        grunt.registerTask('release', [
            'shell:bourbon',
            'sass:admin',
            'handlebars',
            'concat',
            'uglify',
            'changelog',
            'clean:build',
            'copy:build',
            'compress:release'
        ]);

        grunt.registerTask('dev',
            'Dev Mode; watch files and restart server on changes',
            [
                'handlebars',
                'concat',
                'copy:dev',
                'express:dev',
                'open',
                'watch'
            ]);

        // TODO: Git submodule init/update (https://github.com/jaubourg/grunt-update-submodules)?
        grunt.registerTask('init', 'Prepare the project for development', ['shell:bourbon', 'default']);

        grunt.registerTask('test-functional', 'Run functional interface tests (CasperJS)', ['clean:test', 'setTestEnv', 'loadConfig', 'copy:dev', 'express:test', 'spawn-casperjs', 'express:test:stop']);

        grunt.registerTask('test-functional', 'Run casperjs tests only', ['clean:test', 'setTestEnv', 'express:test', 'spawn-casperjs']);

        grunt.registerTask('test-routes', 'Run functional route tests (mocha)', ['clean:test', 'setTestEnv', 'loadConfig', 'express:test', 'mochacli:routes', 'express:test:stop']);

        grunt.registerTask('validate', 'Run tests and lint code', ['jshint', 'test-routes', 'test-unit', 'test-api', 'test-integration', 'test-functional']);


        // ### Coverage report for Unit and Integration Tests

        grunt.registerTask('test-coverage', 'Generate unit and integration (mocha) tests coverage report', ['clean:test', 'setTestEnv', 'loadConfig', 'shell:coverage']);


        // ### Documentation

        grunt.registerTask('docs', 'Generate Docs', ['groc']);


        // ### Tools for building assets

        grunt.registerTask('init', 'Prepare the project for development', ['shell:bower', 'default']);

        // Before running in production mode
        grunt.registerTask('prod', 'Build JS & templates for production', ['handlebars', 'concat', 'uglify', 'copy:prod']);

        // When you just say 'grunt'
        grunt.registerTask('default', 'Build JS & templates for development', ['update_submodules', 'handlebars', 'concat', 'copy:dev']);
=======
            ' - Do our standard build steps \n' +
            ' - Copy files to release-folder/#/#{version} directory\n' +
            ' - Clean out unnecessary files (travis, .git*, etc)\n' +
            ' - Zip files in release-folder to dist-folder/#{version} directory',
            ['shell:bower', 'update_submodules', 'concat', 'uglify', 'clean:release', 'copy:release', 'compress:release']);
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6
    };

// Export the configuration
module.exports = configureGrunt;
