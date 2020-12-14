module.exports = function cloudinary(path, transforms) {
  return `https://res.cloudinary.com/{name}/${transforms}/remote${path}`;
};
