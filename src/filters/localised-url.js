const locales = require('../_data/locales');

module.exports = function localisedURL(path, locale) {
  const lang = locales.languages.filter((lang) => lang.code == locale.code)[0];
  let newPath = path;

  locales.languages.forEach((locale) => {
    newPath = newPath.replace(`${locale.code}/`, '').replace(locale.root, '');
  });

  return `${lang.root}${newPath}`;
};
