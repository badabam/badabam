if (!module.parent) { browserify(); }
exports.browserify = browserify;


function browserify() {
  const exec = require('child_process').exec;
  const fs = require('fs-extra');
  fs.ensureDirSync('../docs/js');
  exec('browserify src/js/scripts.js -o ../docs/js/scripts.min.js -t [ babelify --presets [ es2015 stage-2] ]', (err, stdout) => {
    console.log(stdout || 'Browserify: all good.');
  });
}
