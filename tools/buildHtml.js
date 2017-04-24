import filesToRead from './filesToCopy';

const fs = require('fs');
const cheerio = require('cheerio');
const colors = require('colors');

/*eslint-disable no-console */

filesToRead.forEach(file => {

  const dataType = file.isHtml ? 'utf-8' : null

  fs.readFile(file.path, dataType, function (err, markup) {
    if (err) {
      return console.log(err);
    }

    // const $ = cheerio.load(markup);
    const data = file.isHtml ? cheerio.load(markup).html() : markup;

    fs.writeFile(`dist/${file.name}`, data, dataType, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log(`${file.name} written to /dist`.green)
    })
  })
});
