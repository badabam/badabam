const fs = require('fs');
const Q = require ('q');

const fs_readFile = Q.denodeify(fs.readFile);
const fs_writeFile = Q.denodeify(fs.writeFile);

const PATTERN = /<!-- .*\.html -->/g;

if (!module.parent) { renderPartials(); }
exports.renderPartials = renderPartials;

function renderPartials () {
  const deferred = Q.defer();
  fs_readFile('src/index.html.tpl', 'utf-8')
         .catch((err) => {throw err;})
         .done((data) => {
           getMatches(data, deferred);
         });

  return deferred.promise;
}

function getMatches (mainFileData, deferred) {
  if (!mainFileData.length) { deferred.reject('Empty file.'); }

  let promises = [];
  const matches = mainFileData.match(PATTERN);

  matches && matches.forEach((match) => {
    const partialPath = match.split(' ')[1];
    const p = fs_readFile(`src/${partialPath}`);
    p.catch((err) => {throw err;});
    p.done((partialData) => {
      mainFileData = mainFileData.replace(match, partialData);
    });
    promises.push(p);
  });

  return Q.all(promises).done( () => {
    fs_writeFile('../docs/index.html', mainFileData)
    .done(() => {
      console.log('Rendered index.html.');
      deferred.resolve();
    });
  });
}
