const languages = require('../_data/locales');

module.exports = {
  pagination: {
    data: 'locales',
    size: 1,
    alias: 'locale',
  },
  locales: languages.languages.map((language) => language.code),
  permalink: '{{ locale }}/{{ page.filePathStem | global }}.html',
};
