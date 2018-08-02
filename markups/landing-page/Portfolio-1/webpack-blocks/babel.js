/**
 * @requires babel-preset-env
 * @requires babel-preset-es2017
 */
module.exports = () => ({ 
  module: { 
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['stage-0']
        }
      },
    }]
  },
  plugins: [
    ['transform-class-properties', { spec: true }]
  ]   
});