const cloud = require('d3-cloud');
const { createCanvas } = require('canvas');
const { wordCountToCloudInput } = require('../utils/wordCountToCloudInput');

module.exports = (req, res, next) => {
  const { words, config } = req.body;

  if (!words) return next('NO WORDS');

  const svgWidth = config.svgWidth || 500;
  const svgHeight = config.svgHeight || 300;
  const paddingBetweenWords = config.padding || 2;
  const rotationDeg = config.rotation || 0; //~~(Math.random() * 2) * 90; //(~~(Math.random() * 6) - 3) * 30
  const font = config.font || 'Impact';

  const wordsWithAttr = wordCountToCloudInput(words);

  cloud()
    .size([svgWidth, svgHeight])
    .canvas(() => createCanvas(svgWidth, svgHeight))
    .words(wordsWithAttr)
    .padding(paddingBetweenWords)
    .rotate(() => rotationDeg)
    .font(font)
    .fontSize((d) => d.size)
    .spiral('rectangular')
    .on('end', (wordsFinished) => res.send(JSON.stringify(wordsFinished)))
    .start();
};
