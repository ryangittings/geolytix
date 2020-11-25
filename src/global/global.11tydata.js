const locales = require('../_data/locales');

module.exports = {
  pagination: {
    data: 'languages',
    size: 1,
    alias: 'locale',
  },
  languages: locales.languages.map((lang) => lang.root),
  permalink: '{{ locale }}{{ page.filePathStem | global | replace("index", "") }}/index.html',
  eleventyComputed: {
    locale: (data) => {
      return locales.languages.filter((lang) => lang.root == data.locale)[0].code;
    },
  },
};
