const express = require('express');
const addAttr = require('../controllers/add-attributes')
const cloud = require("d3-cloud");
const {createCanvas} = require("canvas");

const route = express.Router();

route.use(express.json());
route.post('/',
   (req, res, next) => {

    const words = req.body;
    const wordsWithAttr = addAttr(words); //Each word needs to have the form: {text: "word", size: 50}

    const svgWidth = 500;
    const svgHeight = 500;
    const paddingBetweenWords = 5;
    const rotationDeg = 90;
    const font = "Impact";
    
    cloud()
      .size([svgWidth,svgHeight])
      .canvas(() => createCanvas(1, 1))
      .words(wordsWithAttr) 
      .padding(paddingBetweenWords)
      .rotate(() => ~~(Math.random() * 4) * 45 - 45)
      .font(font)
      .fontSize(d => d.size)
      .on("end", wordsFinished => res.send(JSON.stringify(wordsFinished)))
      .start();
  })

module.exports = route