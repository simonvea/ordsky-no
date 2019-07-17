const countWords = require('../utils/count-words')

module.exports = (req, res, next) => {
  const text = req.body.text
  const type = req.body.type || 'text'

  // lagre i database, gjerne kombinert ordtelling og request

  if(type === 'text') {
    if(!text) return next('NO TEXT')

    const countedWords = countWords(text);

    return res.json(countedWords)
  } 

  return next()
}
