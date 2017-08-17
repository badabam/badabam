if (!module.parent) { lint(); }
exports.lint = lint;

function lint() {
  var exec = require('child_process').exec;
  exec('jshint src/js/*.js internal/*.js', (err, stdout) => {
    console.log(stdout || 'JSHint: all good.');
  });
}
