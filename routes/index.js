
const Router = require('express').Router();

Router.use('/count-words-on-pages', require('./count-words-on-pages'));

module.exports = Router