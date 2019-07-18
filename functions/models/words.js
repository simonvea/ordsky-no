const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

let wordsCollection = db.collection('words');


module.exports = wordsCollection