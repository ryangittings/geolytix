module.exports = function postsForTag(collection, tag) {
  return collection.filter((item) => item.tags.includes(tag));
};
