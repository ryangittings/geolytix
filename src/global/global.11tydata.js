const languages = require('../_data/locales');

module.exports = {
  pagination: {
    data: 'locales',
    size: 1,
    alias: 'locale',
  },
  locales: languages.languages,
  permalink: '{{ locale.root }}{{ page.filePathStem | global }}.html',
};
