
const Router = require('express').Router();

//NB! All routes need to start with /api/ or else you need to change it in firebase.json

Router.use('/api/count-words-on-pages', require('./count-words-on-pages'));
Router.use('/api/create-cloud', require('./create-cloud'));

module.exports = Router