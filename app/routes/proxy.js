module.exports = function(app) {
	
	var httpProxy = require('http-proxy');
	var apiProxy = httpProxy.createProxyServer();
	var properties = app.properties.properties;
	var authenticate = app.oauth.authenticate;

	app.all("/waiterws/*", function(req, res) {
		console.log('redirecting to ' + properties.DtoServer);
		authenticate.validateToken(req.headers.authorization,function(value){		  
		    apiProxy.web(req, res, {
		    	target: properties.DtoServer
		    });
		},
		function(statusCode,message){
			res.status(statusCode).send({message: message})
		});

	});

	// database proxy
	app.all("/wildfly/*", function(req,res){
		console.log('redirecting to ' + properties.WildFlyServer);
	    apiProxy.web(req, res, {
	    	target: properties.WildFlyServer,
//	    	prependPath: true, 
//	    	ignorePath: true
	    });
	});
	app.all("/", function(req,res){
		console.log('redirecting to ' + 'http://lgrapplications.com');
		res.redirect('http://lgrapplications.com');

	});

	

};