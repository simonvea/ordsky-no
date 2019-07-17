const countWords = require('../utils/count-words')

module.exports = (req, res, next) => {
  const text = String(req.body.text);

  // lagre i database, gjerne kombinert ordtelling og request

  if(!text) return next('NO TEXT');

  const countedWords = countWords(text);

  return res.json(countedWords);
}
