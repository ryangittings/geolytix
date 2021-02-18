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
  collection = await api.posts
    .browse({
      include: 'tags,authors',
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });

  collection.forEach((post) => {
    post.url = `/blog${stripDomain(post.url)}`;
    post.primary_author.url = stripDomain(post.primary_author.url);
    post.tags.map((tag) => (tag.url = stripDomain(tag.url)));

    // Convert publish date into a Date object
    post.published_at = new Date(post.published_at);
  });

  // Bring featured post to the top of the list
  collection.sort((post, nextPost) => nextPost.featured - post.featured);

  return collection;
};
