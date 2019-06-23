const express = require('express')
const countWordsOnPages = require('../controllers/count-words-on-pages');

const route = express.Router();

route.use(express.json());
route.post('/',
  async (req, res, next) => {
    const urls = req.body.urls;
    const htmlElement = req.body.htmlElement;

    const words =  await countWordsOnPages(urls, htmlElement)

    return res.send(words)
  })

module.exports = route
