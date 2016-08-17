'use strict';

var NODE_ENV = process.env.NODE_ENV || 'development';
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('../style.css');
var CopyWebpackPlugin = require('copy-webpack-plugin');

//postCSS
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

//static generator

// const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const paths = [
  '/home',
  '/article'
];

module.exports = {
  context: __dirname + '/frontend',


  entry: {
    app: ['./app']
  },

  output: {
    path:     __dirname + '/public/js/',
    publicPath: '/js/',
    filename: "[name].js",
    libraryTarget: 'umd'
  },

  // watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  node: {
    fs: "empty"
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions:         ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates:    ['*-loader', '*'],
    extensions:         ['', '.js']
  },

  module: {

    loaders: [
    {
      test:   /\.(png|jpg|svg)$/,
      loader: 'file?name=../images/[name].[ext]'
    }, {
      test:   /\.(js)$/,
      loader: "babel?presets[]=es2015"
      // exclude: /node_modules/
    }, {
      test:   /\.jade$/,
      loader: "jade"
    }, {
      test:   /\.json$/,
      loader: "json"
    }, {
      test:   /\.css$/,
      loader: extractCSS.extract("style-loader"),
    }, {
      test:   /\.css$/,
      loader: "style-loader!css-loader!postcss-loader"
    },{
      test:   /\.(ttf|eot|woff|woff2)$/,
      loader: 'file?name=/font/[name].[ext]'
    },
    {
      test: /\.xsl$/,
      loader: 'xslt?name=[name]'
    // },
    // {
    //   test: /\.xml|md$/,
    //   loader: 'html'
    }
  ]
  },

  devServer : {
    contentBase: __dirname + '/public',
    hot: true,
    proxy :[
      {
        path : /^[^.]+$/,
        target : "http://localhost:3000/index.html",
        bypass: function(req, res, options) {
          return '/index.html';
        }
      }]
  },

  plugins: [
    extractCSS,
    new webpack.ContextReplacementPlugin( /node_modules\/moment\/locale/, /ru|en-gb/),
  ],

  devtool: "cheap-module-eval-source-map",

};


if (NODE_ENV == 'production') {
  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // don't show unreachable variables etc
          warnings:     false,
          drop_console: true,
          unsafe:       true
        }
      })
  );


}
