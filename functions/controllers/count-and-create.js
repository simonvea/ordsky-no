function countWords(string) {
  const regExp = /\S+/gi;
  const wordsRaw = string.toLowerCase().match(regExp);
  const words = wordsRaw.map(word => word.replace(/[.,/#!$%^&*;:{}=\-_`'´~()?]/g, "")).filter(word => word.length > 0);
  const count = {};

  if(isIterable(words)) { //checks if there are no words and throws an error if there are no words
      for (let word of words) {
          if(!count[word]) {count[word] = 1}
          else {count[word]++}
      }
  } else {throw new Error}
  
  return count
}

function isIterable(obj) {

  if (obj === null) {
      return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}
