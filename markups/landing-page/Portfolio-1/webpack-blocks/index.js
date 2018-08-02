const webpackMerge = require('webpack-merge');

const merge = (...configs) => webpackMerge(...configs);

const pug = require('./pug');
const css = require('./css');
const entry = require('./entry');
const babel = require('./babel');
const output = require('./output');
const devServer = require('./dev-server');
const fontLoader = require('./font-loader');
const imageLoader = require('./image-loader');

module.exports = {
    pug,
    css,
    merge,
    entry,
    babel,
    output,    
    devServer,
    fontLoader,
    imageLoader,
}