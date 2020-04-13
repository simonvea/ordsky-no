const getRandomColor = require('randomcolor');

const wordCountToCloudInput = (wordCount) => {
  const words = Object.keys(wordCount);
  const cloudInput = words.map((word) => ({
    text: word.toUpperCase(),
    size: wordCount[word],
    fill: getRandomColor(),
  }));
  const normalizedSizes = normalizeSizes(cloudInput);
  return normalizedSizes.sort((a, b) => b.size - a.size);
};

function normalizeSizes(words, minSize = 20, maxSize = 60) {
  const sizes = words.map((word) => {
    return Number.isNaN(word.size) ? 1 : word.size;
  });
  const max = Math.max(...sizes);
  const min = Math.min(...sizes);
  const normalize = (size) => {
    const normalized = ((size - min) / (max - min)) * maxSize;
    return normalized > minSize ? normalized : minSize;
  };
  return words.map((word, index) => ({
    ...word,
    size: normalize(sizes[index]),
  }));
}

module.exports = { wordCountToCloudInput };
