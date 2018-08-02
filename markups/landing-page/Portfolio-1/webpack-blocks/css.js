const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * @requires extract-text-webpack-plugin
 * @requires style-loader
 * @requires css-loader
 */
module.exports = () => ({ 
    module: { rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
          })
      }]
    },
    plugins: [ new ExtractTextPlugin('styles.css') ]
});