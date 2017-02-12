// from
// https: //medium.com/@sagarjauhari/quick-n-dirty-way-to-deploying-vue-webpack-apps-on-heroku-4ab964ee536#.60la0ef0k

var express = require('express')
var path = require('path');
var serveStatic = require('serve-static')
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
// var port = process.env.PORT || 3000;
// app.listen(port);
// console.log('server started on port ' + port);


module.exports = app;
