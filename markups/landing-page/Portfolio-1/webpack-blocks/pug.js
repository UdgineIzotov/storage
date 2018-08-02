const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @requires pug-loader 
 * @requires html-webpack-plugin
 */
module.exports = () => ({
    module: {
        rules: [{
            test: /\.pug$/,
            loader: 'pug-loader',
            options: { pretty: true }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.pug' }),
    ]
});