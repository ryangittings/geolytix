module.exports = function cloudinary(url, transforms) {
  if (transforms) {
    return `https://res.cloudinary.com/dvx8vwneg/image/fetch/${transforms}/${url}`;
  }

  return `https://res.cloudinary.com/dvx8vwneg/image/fetch/${url}`;
};
