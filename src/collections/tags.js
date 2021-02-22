const ghostContentAPI = require('@tryghost/content-api');

// Strip Ghost domain from urls
const stripDomain = (url) => {
  return url.replace(process.env.GHOST_API_URL, '');
};

// Init Ghost API
const api = new ghostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: 'v2',
});

module.exports = async function (collection) {
  collection = await api.tags
    .browse({
      include: 'count.posts',
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });

  // Attach posts to their respective tags
  collection.forEach(async (tag) => {
    tag.url = `/blog${stripDomain(tag.url)}`;
  });

  return collection;
};
