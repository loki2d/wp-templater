var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("../webpack.config.js");
var compiler = webpack(config);

var server = new webpackDevServer(compiler, {
  contentBase: __dirname + '/../public',
  noInfo : true,
  proxy :[
    {
      path : /^[^.]+$/,
      target : "/index.html",
      bypass: function(req, res, options) {
        return '/index.html';
      }
    }]
});

server.listen(8080, "localhost", function() {
  console.log("Сервер запустится...");
});
