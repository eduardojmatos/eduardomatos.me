// # Ghost bootloader
// Orchestrates the loading of Ghost
// When run from command line.

var ghost = require('./core'),
    errors = require('./core/server/errors');

<<<<<<< HEAD
ghost();
=======
ghost().otherwise(function (err) {
    errors.logErrorAndExit(err, err.context, err.help);
});
>>>>>>> 09e03f4d78d17b2d1b1b3f452aff6933cd7cf1f6
