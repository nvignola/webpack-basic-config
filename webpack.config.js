 var path = require('path');
 var webpack = require('webpack');
 var HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
     entry: './index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'index.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['env']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map',
     plugins: [new(HtmlWebpackPlugin)]
 };