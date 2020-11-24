const locales = require('../_data/locales');

module.exports = function link(path, locale) {
  const lang = locales.languages.filter((lang) => lang.code == locale)[0];

  if (lang) {
    return `${lang.root}${path.substring(1)}`;
  }

  return path;
};
