const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * @requires copy-webpack-plugin
 * @requires ulr-loader
 */
module.exports = () => ({ 
    module: { rules: [{
        test: /\.(jpe?g|png|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        }]
      }]
    },
    plugins: [ new CopyWebpackPlugin([ { from: 'src/images/', to: 'images/' } ]) ]
})