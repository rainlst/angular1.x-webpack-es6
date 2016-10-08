var webpack = require('webpack')
var colors = require("colors")
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var fs = require('fs');
var util = require('util');
var path = require('path');
var upath = require('upath');

var port = 8080;


var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/index.html');
  console.log(req, res)
})

app.use(function (request, response, next) {
  var list = matchDataSource(__dirname + '/mockup/').map((file) => {
   var replace_target = upath.normalizeSafe(__dirname + '/mockup');
        return upath.normalizeSafe(file.split(__dirname + '/mockup').slice(-1)[0].replace('.js', '')).replace(replace_target, '')
  }) 
  console.info('request===>'.yellow + request.url.yellow)
  //console.info(request.path);
  if (list.includes(request.path)) {
    var data = JSON.stringify(readSource(request.path));
    console.log('response===>'.green+data.green)
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(data);
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" })
    response.end("null");
    next();
  }
})


// if (request.url === "/error") {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.end("Welcome to the homepage!\n");
// } else {
//   
// }


app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==>🌍Listening on port %s. Open up http://localhost:%s/ in your browser.".green, port, port)
  }
})

function matchDataSource(dir) {
  //var path = __dirname + '/src/mockup/'
  return fs.readdirSync(dir).reduce((list, file) =>{
    var name = path.join(dir, file);
    var isDir = fs.statSync(name).isDirectory();
    return list.concat(isDir ? matchDataSource(name) : [name]);
  }, []);
}

function readSource(path) {
  var relativePath = `./mockup${path}.js`;
  delete require.cache[require.resolve(relativePath)]
  return require(relativePath)();
}


