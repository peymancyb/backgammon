var webpack = require("webpack");
var path = require("path");
// var webpack = require("webpack");
// var DIST_DIR = path.resolve(__dirname,"src");
var SRC_DIR = path.resolve(__dirname,"src");

var config = {
  entry: SRC_DIR+"/App.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  module:{
    loaders:[
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets:["react","es2015","stage-2"]
        }
      },
      { test: /\.css$/,
        loader: 'style-loader!css-loader' 
      },
    ]
  }
};

module.exports = config;
