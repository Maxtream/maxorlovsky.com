const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: ['./fe/src/app.js'],
        vendors: [
			"angular",
			"angular-animate",
			"angular-route",
			"angular-touch"
		]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/dist/js')
    },
    plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'development', 
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendors'
		}),
	],
	devtool: "source-map"
};