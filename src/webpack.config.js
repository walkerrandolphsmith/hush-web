var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, './app/index.jsx'),
	output: {
		path: path.join(__dirname, './../dist'),
		contentBase: 'dist',
		filename: 'index.js'
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new BowerWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'blog',
			template: path.join(__dirname, './web/index.html')
		})
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
		modulesDirectories: ['web_modules', 'node_modules', 'Components']
	},
	module: {
		loaders: [
		{
			test: /\.js$/, exclude:[/node_modules/, /public\/components/], loader: 'babel-loader?optional=runtime'
		},
		{
			test: /\.jsx$/, exclude:[/node_modules/, /public\/components/], loaders: [ 'react-hot', 'babel-loader?optional=runtime']
		},
		{
			test: /\.(less|css)$/,
			loaders: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
		},
		{
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url-loader?limit=10000&minetype=application/font-woff'
		},
		{
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/font-woff2'
		},
		{
			test: /\.(ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'file-loader'
		}, {
			test: /.*\.(gif|jpg)$/,
			loader: ['file', 'image'],
			query: {
				progressive: true,
				interlaced: true,
				optimizationLevel: 7
			}
		}, {
			test: /\.png$/,
			loaders: ['url-loader', 'image'],
			query: {
				mimetype: 'image/png',
				progressive: true,
				interlaced: true,
				optimizationLevel: 7
			}
		}]
	}
};
