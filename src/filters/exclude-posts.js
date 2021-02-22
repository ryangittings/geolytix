module.exports = function excludePosts(collection, post) {
  return collection.filter((item) => {
    return post !== item;
  });
};
