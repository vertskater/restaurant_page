const path = require('path');
const { merge } = require("webpack-merge");
const parts = require("./webpack.parts");
//const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
const commonCofig = merge([
  { entry: ["./src"] },
  parts.extractCSS(),
])

module.exports = commonCofig;
