const fs = require('fs');
const site = require('../_data/site');

module.exports = function i18n(string) {
  const filePath = `./src/_data/language/${site.locale.code}.json`;

  if (fs.existsSync(filePath)) {
    const file = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(file);

    if (json[string] && json[string].length) {
      return json[string];
    }
  }

  return string;
};
