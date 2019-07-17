const express = require('express');
const cloudController = require('../controllers/cloud');
const wordsController = require('../controllers/words');
const webController = require('../controllers/words-web');
const errHandler = require('../middleware/errorHandlers');

const router = express.Router();

//NB! All routes are dependent on config in firebase.json, under rewrites. Currently it is set as calls to /api in main index.js file.

router.use(express.json());
router.post('/cloud', cloudController);
router.post('/words', wordsController, webController);
router.use(errHandler);

module.exports = router
