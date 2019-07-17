const cloud = require("d3-cloud");
const { createCanvas } = require("canvas");
const addAttr = require('../utils/add-attributes');

module.exports = (req, res, next) => {

    const words = req.body.words;
    const svgWidth = req.body.svgWidth || 500;
    const svgHeight = req.body.svgHeight || 500;
    const paddingBetweenWords = req.body.padding || 7;
    const rotationDeg = req.body.rotation || 90;
    const font = req.body.font || "Impact";

    const wordsWithAttr = addAttr(words); //Returning an array of objects with the form: {text: "word", size: 50}
    
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
  }