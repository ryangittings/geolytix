const fs = require('fs');

module.exports = function i18n(string, locale) {
  const filePath = `./src/_data/language/${locale}.json`;

  if (fs.existsSync(filePath)) {
    const file = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(file);

    if (json[string] && json[string].length) {
      return json[string];
    }
  }

  return string;
};
