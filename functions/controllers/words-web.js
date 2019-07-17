const countWordsOnPages = require('../utils/count-words-web');

module.exports = (req, res, next) => {
  const type = req.body.type.toLowerCase();
  const urls = req.body.urls;
  const htmlElement = req.body.htmlElement || 'body';

  if(!type || type !== 'web') return next('NO TYPE')
  if(!urls) return next('NO URLS')

  countWordsOnPages(urls, htmlElement)
    .then(words => {
  
      // lagre i database, gjerne kombinert ordtelling og request

      return res.send(words);
    }).catch(next)
}
