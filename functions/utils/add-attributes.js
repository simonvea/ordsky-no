const getRandomColor = require('randomcolor');

module.exports = (data) => {
  const groupedWords = groupWordsByCount(data);
  const sortedWords = sortWords(groupedWords); //sorted low to high

  const sizeOptions = {
    minSize: 20,
    maxSize: 80,
    array: sortedWords,
  };

  const wordsWithSize = addSize(sizeOptions);
  const wordsWithColor = addColorToEachWord(wordsWithSize);
  const flattenedArray = flattenArray(wordsWithColor);
  return flattenedArray;
};

function groupWordsByCount(wordsObject) {
  const words = Object.keys(wordsObject);
  const grouped = [];

  for (word of words) {
    const number = wordsObject[word];
    const index = indexOfNumber(number, grouped);
    if (index !== -1) {
      grouped[index].words.push(word);
    } else {
      grouped.push({ count: number, words: [word] });
    }
  }
  return grouped;
}

function indexOfNumber(number, array) {
  return array.findIndex((object) => object.count === number);
}

function sortWords(wordsObject) {
  return wordsObject.sort((a, b) => (a.count > b.count ? 1 : -1));
}

function addSize({ minSize, maxSize, array }) {
  return array
    .map((words, index) => {
      const multiplier = (index / array.length).toFixed(2);
      const size = minSize + multiplier * maxSize;
      return { size, ...words };
    })
    .reverse();
}

function addColorToEachWord(words) {
  const wordsWithColor = words.map((place) => {
    return place.words.map((word) => {
      return { text: word, size: place.size, fill: getRandomColor() };
    });
  });
  return wordsWithColor;
}

function flattenArray(arrayOfArrays) {
  const flattened = [];
  for (const array of arrayOfArrays) {
    flattened.push(...array);
  }
  return flattened;
}

/* 
Deprecated in favor for:  https://github.com/davidmerfield/randomColor

function getRandomColor() {
    const color = Math.floor(Math.random() * 16777215).toString(16); 
return "#" + color.padStart(6,"0")
} */
