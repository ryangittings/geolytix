const locales = require('../_data/locales');

module.exports = {
  pagination: {
    data: 'locales',
    size: 1,
    alias: 'locale',
  },
  locales: locales.languages.map((lang) => lang.root),
  permalink: '{{ locale }}{{ page.fileSlug | global }}/index.html',
  eleventyComputed: {
    locale: (data) => {
      return locales.languages.filter((lang) => lang.root == data.locale)[0].code;
    },
  },
};
