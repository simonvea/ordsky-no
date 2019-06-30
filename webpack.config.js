const path = require('path');

module.exports = {
  mode: "development",
  entry: ['@babel/polyfill','./src/main.js' ],
  watch: true,
  devtool: 'inline-source-map', //remove for production
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};