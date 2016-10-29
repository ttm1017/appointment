const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        main: './public/js/index.jsx',
        style: './public/css/style.scss'
    },
    output: {
        path: './build',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style", "css!sass")
        }, {
            test: /\.jpg|png$/,
            loader: "file-loader"
        }]
    },
    devtool: "eval",
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         $: "jquery",
    //         jQuery: "jquery",
    //         "window.jQuery": "jquery"
    //     })
    // ]
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};