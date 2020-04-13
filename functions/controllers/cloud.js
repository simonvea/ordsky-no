const cloud = require('d3-cloud');
const { createCanvas } = require('canvas');
const addAttr = require('../utils/add-attributes');

module.exports = (req, res, next) => {
  const { words, config } = req.body;

  if (!words) return next('NO WORDS');

  const svgWidth = config.svgWidth || 500;
  const svgHeight = config.svgHeight || 500;
  const paddingBetweenWords = config.padding || 2;
  const rotationDeg = config.rotation || ~~(Math.random() * 4) * 45 - 45;
  const font = config.font || 'Impact';

  const wordsWithAttr = addAttr(words); //Returning an array of objects with the form: {text: "word", size: 50}

  cloud()
    .size([svgWidth, svgHeight])
    .canvas(() => createCanvas(1, 1))
    .words(wordsWithAttr)
    .padding(paddingBetweenWords)
    .rotate(rotationDeg)
    .font(font)
    .fontSize((d) => d.size)
    .on('end', (wordsFinished) => res.send(JSON.stringify(wordsFinished)))
    .start();
};
