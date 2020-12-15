module.exports = function cloudinary(path, transforms) {
  if (transforms) {
    return `https://res.cloudinary.com/dvx8vwneg/image/upload/${transforms}/website${path}`;
  }

  return `https://res.cloudinary.com/dvx8vwneg/image/upload/website${path}`;
};
