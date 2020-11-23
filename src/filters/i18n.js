const fs = require('fs');

module.exports = function i18n(string, locale) {
  const file = fs.readFileSync(`./src/_data/language/${locale}.json`, 'utf8');
  const json = JSON.parse(file);

  if (json[string] && json[string].length) {
    return json[string];
  }

  return string;
};
