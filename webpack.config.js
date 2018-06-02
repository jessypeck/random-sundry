var webpack = require('webpack');
var path = require('path');

// Build outputs to ./build/bundle.js
var BUILD_DIR = path.resolve(__dirname, './public');
// Build starts at ./src/client
var APP_DIR = path.resolve(__dirname, './src/client');

const config = {
   entry: {
     main: APP_DIR + '/index.js'
   },
   output: {
     filename: 'bundle.js',
     path: BUILD_DIR,
     publicPath: BUILD_DIR
   },
   module: {
    rules: [
     {
       test: /(\.css|.scss)$/,
       use: [{
           loader: "style-loader" // creates style nodes from JS strings
       }, {
           loader: "css-loader" // translates CSS into CommonJS
       }, {
           loader: "sass-loader" // compiles Sass to CSS
       }]
     },
     {
       test: /\.(jsx|js)?$/,
       exclude: /node_modules/,
       use: [{
        loader: "babel-loader",
        options: {
            cacheDirectory: true,
            presets: ['react', 'es2015', 'stage-2'] // Transpiles JSX and ES6
            }
       }]
     }
    ],

    },
    devServer: {
        publicPath: "/",
        contentBase: "./public",
        //hot: true
    },
};

module.exports = config;