const express = require('express')
const validateRequest = require('../middleware/validateRequest');
const createCloud = require('../controllers/create-cloud');
// const countWords = require('../controllers/count-words')

const router = express.Router();

//NB! All routes are dependent on config in firebase.json, under rewrites. Currently it is set as calls to /api in main index.js file.

router.use(express.json())
router.post('/create-cloud', 
    validateRequest,
    createCloud
    )

// router.post('/count-words',
//     validateRequest,
//     countWords
//     )

// router.post('/count-words-web',
//     //validateRequest,
//     countWordsWeb
// )

module.exports = router