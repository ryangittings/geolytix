module.exports = function limit(items, length = 4) {
  return items && items.length ? items.slice(0, length) : false;
};
