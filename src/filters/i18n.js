const fs = require('fs');
const site = require('../_data/site');

const writeToFile = (file, filePath, string) => {
  const parsed = JSON.parse(file);
  const initialJson = JSON.stringify(parsed);

  const obj = JSON.parse(file);
  obj[string] = '';
  const updatedJson = JSON.stringify(obj);

  if (initialJson != updatedJson) {
    fs.writeFileSync(filePath, updatedJson, 'utf8'); // write it back
  }
};

module.exports = function i18n(string) {
  const filePath = `./src/_data/language/${site.locale.code}.json`;

  if (fs.existsSync(filePath)) {
    const file = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(file);

    if (json[string] && json[string].length) {
      return json[string];
    } else {
      writeToFile(file, filePath, string);
    }
  }

  return string;
};
