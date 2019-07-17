const countWordsOnPages = require('../utils/count-words-web');

module.exports = (req, res, next) => {
  const urlsRaw = req.body.urls;
  const htmlElement = req.body.htmlElement || 'body';

  if(!urlsRaw) return next('NO URLS')

  const urls = urlsRaw.map(url => String(url));

  countWordsOnPages(urls, htmlElement)
    .then(words => {
  
      // lagre i database, gjerne kombinert ordtelling og request

      return res.send(words);
    }).catch(next)
}
