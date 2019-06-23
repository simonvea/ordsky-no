const express = require('express')
const countWordsOnPages = require('../controllers/count-words-on-pages');

const route = express.Router();

route.use(express.json());
route.post('/',
   (req, res, next) => {
    const urls = req.body.urls;
    const htmlElement = req.body.htmlElement;

    countWordsOnPages(urls, htmlElement).then(words => {
      res.send(words);
    }).catch(next)

  })

module.exports = route
