const express = require('express');
const router = express.Router();
const validateRequest = require('../middleware/validateRequest');
const createCloud = require('../controllers/create-cloud');
const cloudRouter = require('./createCloud')
const countAndCreate = require('../controllers/count-and-create');
const countWordsWeb = require('../controllers/count-words-web');

//NB! All routes are dependent on config in firebase.json, under rewrites. Currently it is set as calls to /api in main index.js file.

router.use(express.json())
router.use('/cloud', cloudRouter)
router.post('/create-cloud', 
    validateRequest,
    createCloud
    );

// router.post('/count-and-create',
//     //validateRequest,
//     countAndCreate
//     );

// router.post('/count-words-web',
//     //validateRequest,
//     countWordsWeb
// );

module.exports = router