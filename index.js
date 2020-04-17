const Pug = require('pug');
const Fs = require('fs');

Fs.writeFileSync('index.html', Pug.renderFile('templates/index.pug', {
    name: 'Timothy'
  }));