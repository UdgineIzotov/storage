const { 
  merge, 
  entry, output, 
  pug, imageLoader, fontLoader, css,
  devServer
 } = require('./webpack-blocks');

const { print } = require('q-i');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildFolder = path.resolve(__dirname, 'build');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = merge(
  pug(),
  css(),

  fontLoader(),
  imageLoader(),
  
  entry('./src/main.js'),
  output(buildFolder, 'bundle.js'),
   
  devServer()
);

module.exports = webpackConfig;
