var webpack = require('webpack');
var webpackDevMiddleWare = require('webpack-dev-middleware');
var webpackHotMiddleWare = require('webpack-hot-middleware');
var config = require('./webpack.config.js');
var express = require('express');

var app = express();
var port = 3000;
var complier = webpack(config);

app.use(webpackDevMiddleWare(complier, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleWare(complier));
app.use(express.static(__dirname));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});

app.listen(port, function(err) {
	if (err) {
		console.error(err);
	} else {
		console.log('===--==listen on port %s', port);
	}
});