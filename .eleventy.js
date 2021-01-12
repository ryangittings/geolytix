require('dotenv').config();

const ghostCollection = require('./src/collections/ghost.js');

const cssMinFilter = require('./src/filters/css-min.js');
const globalFilter = require('./src/filters/global.js');
const i18nFilter = require('./src/filters/i18n.js');
const dateFilter = require('./src/filters/date.js');
const firstWordFilter = require('./src/filters/first-word.js');
const localisedURLFilter = require('./src/filters/localised-url.js');

const cloudinaryShortcode = require('./src/shortcodes/cloudinary.js');
const cloudinaryFetchShortcode = require('./src/shortcodes/cloudinaryFetch.js');

module.exports = (config) => {
  // Collections
  config.addCollection('posts', ghostCollection);

  // Filters
  config.addFilter('date', dateFilter);
  config.addFilter('cssmin', cssMinFilter);
  config.addFilter('global', globalFilter);
  config.addFilter('i18n', i18nFilter);
  config.addFilter('firstWord', firstWordFilter);
  config.addFilter('localisedURL', localisedURLFilter);

  // Shortcodes
  config.addShortcode('cloudinary', cloudinaryShortcode);
  config.addShortcode('cloudinaryFetch', cloudinaryFetchShortcode);

  // Pass through
  config.addPassthroughCopy('./src/img/');
  config.addPassthroughCopy('./src/fonts/');
  config.addPassthroughCopy('./src/js/');
  config.addPassthroughCopy('./src/apple-touch-icon-57x57.png');
  config.addPassthroughCopy('./src/apple-touch-icon-72x72.png');
  config.addPassthroughCopy('./src/apple-touch-icon-76x76.png');
  config.addPassthroughCopy('./src/apple-touch-icon-114x114.png');
  config.addPassthroughCopy('./src/apple-touch-icon-152x152.png');
  config.addPassthroughCopy('./src/apple-touch-icon-180x180.png');
  config.addPassthroughCopy('./src/apple-touch-icon.png');
  config.addPassthroughCopy('./src/favicon.ico');
  config.addPassthroughCopy('./src/robots.txt');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    passthroughFileCopy: true,
  };
};
