const path = require('path');

module.exports = {
  mode: "production",
  entry: ['@babel/polyfill','./src/main.js' ],
  //devtool: 'inline-source-map', removed for production
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