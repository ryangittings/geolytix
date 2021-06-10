require('dotenv').config();

const postCollection = require('./src/collections/posts.js');
const tagCollection = require('./src/collections/tags.js');

const pluginRss = require('@11ty/eleventy-plugin-rss');

const cssMinFilter = require('./src/filters/css-min.js');
const globalFilter = require('./src/filters/global.js');
const i18nFilter = require('./src/filters/i18n.js');
const dateFilter = require('./src/filters/date.js');
const firstWordFilter = require('./src/filters/first-word.js');
const localisedURLFilter = require('./src/filters/localised-url.js');
const postsForTagFilter = require('./src/filters/posts-for-tag.js');
const tagsForPostFilter = require('./src/filters/tags-for-post.js');
const limitFilter = require('./src/filters/limit.js');
const jsonifyFilter = require('./src/filters/jsonify.js');
const excludePostsFilter = require('./src/filters/exclude-posts.js');

const cloudinaryShortcode = require('./src/shortcodes/cloudinary.js');
const cloudinaryFetchShortcode = require('./src/shortcodes/cloudinaryFetch.js');

module.exports = (config) => {
  // Collections
  config.addCollection('posts', postCollection);
  config.addCollection('tags', tagCollection);

  // Add plugins
  config.addPlugin(pluginRss);

  // Filters
  config.addFilter('date', dateFilter);
  config.addFilter('cssmin', cssMinFilter);
  config.addFilter('global', globalFilter);
  config.addFilter('i18n', i18nFilter);
  config.addFilter('firstWord', firstWordFilter);
  config.addFilter('localisedURL', localisedURLFilter);
  config.addFilter('postsForTag', postsForTagFilter);
  config.addFilter('tagsForPost', tagsForPostFilter);
  config.addFilter('limit', limitFilter);
  config.addFilter('excludePosts', excludePostsFilter);
  config.addFilter('jsonify', jsonifyFilter);

  // Shortcodes
  config.addShortcode('cloudinary', cloudinaryShortcode);
  config.addShortcode('cloudinaryFetch', cloudinaryFetchShortcode);

  // Pass through
  config.addPassthroughCopy('./src/google69002230bb41088e.html');
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
