var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: 'source-map', //cheap-source-map
	entry: [
		'webpack-hot-middleware/client',
		'./index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		// new ExtractTextPlugin('app.css', {allChunks: true}),
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: [
				'babel'
			],
			exclude: /node_modlues/,
			include: __dirname
		}, {
			test: /\.less$/,
			loaders: ['style', 'css', 'less']
			// loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
		}]
	}


};