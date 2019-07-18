// require('dotenv').config(); for local testing only
const functions = require('firebase-functions');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use('/api', routes)

app.use((err, req, res, next) => {
    if (err.message === "Bad Request") {
        res.status(400).send('Bad Request')
    }
    next(err)
})

exports.app = functions.https.onRequest(app);
