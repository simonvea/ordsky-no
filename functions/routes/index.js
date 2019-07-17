const express = require('express');
const router = express.Router();
const validateRequest = require('../middleware/validateRequest');
const cloudController = require('../controllers/cloud')
const wordsController = require('../controllers/words')
const errHandler = require('../middleware/errorHandlers')


//NB! All routes are dependent on config in firebase.json, under rewrites. Currently it is set as calls to /api in main index.js file.

router.use(express.json())
//router.use('/cloud', cloudController)
router.use('/words', wordsController)
router.use(errHandler)
    


module.exports = router