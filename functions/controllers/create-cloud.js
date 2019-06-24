const cloud = require("d3-cloud");
const {createCanvas} = require("canvas");

module.exports = function createCloud(words) {
    const svgWidth = 500;
    const svgHeight = 500;
    const paddingBetweenWords = 5;
    const rotationDeg = 90;
    const font = "Impact";
    
   const layout = cloud()
      .size([svgWidth,svgHeight])
      .canvas(() => createCanvas(1, 1))
      .words(words) //Each word needs to have the form: {text: "ord", size: 50, test: "haha"}
      .padding(paddingBetweenWords)
      .rotate(() => ~~(Math.random() * 4) * 45 - 45)
      .font(font)
      .fontSize(d => d.size)
      .start();

    return layout
}
