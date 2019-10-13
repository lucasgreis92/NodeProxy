var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(express.static('./public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", true);
  
  next();
});

consign({cwd: 'app'})
	.include('properties')
	.then('request')
	.then('services')
	.then('helpers')
	.then('cache')
	.then('oauth')
	.then('routes')
	.into(app);

module.exports = app;
