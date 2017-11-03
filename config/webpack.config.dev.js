const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');
const helpers = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('public/dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('styles.css')
    ],

    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        stats: 'minimal'/*,
        TODO setup when REST service ready
        proxy: {
            '/api/**': {
                target: 'http://localhost:8080/your-rest-service',
                secure: false,
                changeOrigin: true
            }
        }*/
    },
});