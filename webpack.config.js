var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var SRC_DIR = path.resolve(__dirname,"src");
var DIST_DIR = path.resolve(__dirname,"public");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: SRC_DIR+"/index.js",
  output: {
    path: DIST_DIR,
    filename: "bundle-[hash].js",
  },
  resolve: {
   extensions: ['.js', '.jsx']
  },
  module:{
    rules:[
      {
      test: /\.html$/,
      loader: 'html-loader'
      },
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: "babel-loader",

      },
      { test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000
  }
};

module.exports = config;
