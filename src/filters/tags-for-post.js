module.exports = function tagsForPost(collection, post) {
  return collection.filter((item) => {
    return post.tags.includes(item.slug);
  });
};
