function countWords(string) {
  const regExp = /\S+/gi;
  const wordsRaw = string.toLowerCase().match(regExp);
  const words = wordsRaw
    .map((word) =>
      word
        .replace(/[.,/#!$%^&*;:{}=_`'´~()?+]/g, '')
        .replace(/^-/g, '')
        .replace(/-$/g, '')
    )
    .filter((word) => word.length > 0);

  const count = {};

  if (isIterable(words)) {
    for (let word of words) {
      if (!count[word]) {
        count[word] = 1;
      } else {
        count[word]++;
      }
    }
  } else {
    throw new Error('NO WORDS');
  }

  return count;
}

function isIterable(obj) {
  if (obj === null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}

module.exports = countWords;
