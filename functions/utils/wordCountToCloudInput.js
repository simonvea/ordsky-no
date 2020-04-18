const getRandomColor = require('randomcolor');

const wordCountToCloudInput = (wordCount) => {
  const cloudInput = wordCount.map((word) => ({
    text: word.text.toUpperCase(),
    size: word.count,
    fill: getRandomColor(),
  }));
  const normalizedSizes = normalizeSizes(cloudInput);
  return normalizedSizes.sort((a, b) => b.size - a.size);
};

function normalizeSizes(words, minSize = 20, maxSize = 70) {
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
