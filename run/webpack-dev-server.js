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
      target : "http://localhost:3000/index.html",
      bypass: function(req, res, options) {
        return '/index.html';
      }
    }]
});

server.listen(3000, "localhost", function() {
  console.log("Сервер запустится пока вы читаете это длинное, скучное и никому не нужное сообщение :)");
  setTimeout(function(){
    console.log("=================================localhost:3000========================================")
  }, 3000);
});
