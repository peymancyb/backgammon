var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var SRC_DIR = path.resolve(__dirname,"src");
var DIST_DIR = path.resolve(__dirname,"public");
var config = {
  entry: SRC_DIR+"/App.js",
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
  },
  resolve: {
   extensions: ['.js', '.jsx']
  },
  module:{
    loaders:[
      {
      test: /\.html$/,
      loader: 'html-loader'
      },
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets:["react","es2015","stage-2"]
        },
      },
      { test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
  }
};

module.exports = config;
