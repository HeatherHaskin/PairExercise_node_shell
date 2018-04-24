const fs = require('fs');

const ls = () => {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      files = files.filter(fileName => fileName[0] !== '.');
      process.stdout.write(files.join('\n'));
      process.stdout.write('\nprompt > ');
    }
  });
};

module.exports = ls;
