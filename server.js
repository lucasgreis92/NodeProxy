var http = require('http');
var app = require('./config/express');


http.createServer(app)
.listen(2000, function() {
	console.log('Servidor iniciado');
});
