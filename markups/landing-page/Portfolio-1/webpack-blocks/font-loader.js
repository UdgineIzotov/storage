const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * @requires copy-webpack-plugin
 * @requires ulr-loader
 */
module.exports = () => ({ 
    module: { rules: [{
        test: /\.(svg|eot|ttf|woff)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }]
      }]
    },
    plugins: [ new CopyWebpackPlugin([ { from: 'src/fonts/', to: 'fonts/' } ]) ]
})