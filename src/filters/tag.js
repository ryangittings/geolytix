module.exports = function tag(collection, tag) {
  return collection.filter((item) => item.tags.includes(tag));
};
