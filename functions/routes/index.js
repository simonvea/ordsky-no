const express = require('express')
const validateRequest = require('../middleware/validateRequest');
const createCloud = require('../controllers/create-cloud');
// const countWords = require('../controllers/count-words')

const router = express.Router();

//NB! All routes are dependent on config in firebase.json, under rewrites.

router.use(express.json())
router.post('/api/create-cloud', 
    validateRequest,
    createCloud
    )

// router.post('/api/count-words',
//     validateRequest,
//     countWords
//     )

// router.post('api/count-words-web',
//     //validateRequest,
//     countWordsWeb
// )

router.use((err, req, res, next) => {
    if (err.message === "Bad Request") {
        res.status(400).send('Bad Request')
    }
    next(err)
})

module.exports = router