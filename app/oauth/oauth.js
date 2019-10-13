module.exports = function(app) {
	
	var authenticate = app.oauth.authenticate;
	app.route('/oauth/token/:urlProduto')
	.post(authenticate.doAuthenticate);	


};
