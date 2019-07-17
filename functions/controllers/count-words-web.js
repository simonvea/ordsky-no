const countWordsOnPages = require('../utils/count-words-web');


module.exports = (req, res, next) => {
  const urls = req.body.urls;
  const htmlElement = req.body.htmlElement;

  countWordsOnPages(urls, htmlElement).then(words => {
    return res.send(words);
  }).catch(next)
}
