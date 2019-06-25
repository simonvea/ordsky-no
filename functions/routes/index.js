const express = require('express')
const router = express.Router();
const validateRequest = require('../middleware/validateRequest');
const createCloud = require('../controllers/create-cloud')

//NB! All routes are dependent on config in firebase.json, under rewrites.

router.use(express.json())
router.post('/api/create-cloud', 
    validateRequest,
    createCloud
    )

module.exports = router