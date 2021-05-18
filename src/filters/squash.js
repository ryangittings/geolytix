module.exports = function squash(text) {
  var content = new String(text);

  // remove duplicated words
  var words = content.split(' ');
  var deduped = [...new Set(words)];
  var dedupedStr = deduped.join(' ');

  // remove short and less meaningful words
  var result = dedupedStr.replace(/\b(\.|\,|the|a|an|and|am|you|I|to|if|of|off|me|my|on|in|it|is|at|as|we|do|be|has|but|was|so|no|not|or|up|for)\b/gi, '');

  //remove newlines, and punctuation
  result = result.replace(/\.|\,|\?|—|-|\n/g, '');

  //remove repeated spaces
  result = result.replace(/[ ]{2,}/g, ' ');

  return result;
};
