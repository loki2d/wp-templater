var webpack = require('webpack');
var config = require('./webpack.config.js');

config.entry.app.unshift('webpack-dev-server/client', 'webpack/hot/dev-server');
console.log(config.entry.app);

var webpackDevServer = require('webpack-dev-server');

var compiler = webpack(config);
var settings = {
  contentBase: __dirname + '/public',
  noInfo : true,
  hot: true,
  proxy :[
    {
      path : /^[^.]+$/,
      target : "http://localhost:8080/index.html",
      bypass: function(req, res, options) {
        return '/index.html';
      }
    }]
}

var server = new webpackDevServer(compiler);


server.listen(8080, "localhost", function() {
  console.log(server.settings);
});
