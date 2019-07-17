const countWords = require('../utils/count-words')


module.exports = (req, res, next) => {
  const text = req.body.text
  const type = req.body.type || 'text'

  if(!text) return next('NO TEXT')

  const countedWords = countWords(text);
  // lagre i database

  return res.json(countedWords)
}
