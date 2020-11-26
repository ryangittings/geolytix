const locales = require('../_data/locales');

module.exports = {
  pagination: {
    data: 'languages',
    size: 1,
    alias: 'locale',
  },
  languages: locales.languages.map((lang) => lang.code),
  permalink: '{{ locale }}{{ page.filePathStem | global | replace("index", "") }}/index.html',
  eleventyComputed: {
    page: {
      locale: (data) => {
        return locales.languages.filter((lang) => lang.code == data.locale)[0];
      },
    },
  },
};
