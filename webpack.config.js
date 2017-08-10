const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: [
            './fe/src/app.js',
            './fe/src/controllers/main-controller.js',
            './fe/src/controllers/about-controller.js',
            './fe/src/controllers/work-controller.js'
        ],
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