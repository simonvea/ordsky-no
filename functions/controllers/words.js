const countWords = require('../utils/count-words');
const wordsCollection = require('../models/words');

module.exports = (req, res, next) => {
  const text = String(req.body.text);

  // lagre i database, gjerne kombinert ordtelling og request

  if(!text) return next('NO TEXT');

  const countedWords = countWords(text);

  const doc = {
    text,
    words: countedWords,
    time: new Date(),
  }

  wordsCollection.add(doc)

  return res.json(countedWords);
}
