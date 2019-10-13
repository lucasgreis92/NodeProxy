module.exports = function(app) {
	
	var oauthService = {};
	var request = app.request.serviceRequest;
	oauthService.doAuthenticate = function(urlProduto, grant_type, client_id, client_secret, username, password,
		refresh_token,authorization, callback) {
		request.post('/oauthws/services/oauth/token/'+urlProduto,{},function(error, res, body){
				callback(res.statusCode,body);
		},{
			"content-type": "application/json",
			accept:"application/json",
			grant_type: grant_type,
			client_id: client_id,
			client_secret: client_secret,
			username: username,
			password: password,
			refresh_token: refresh_token,
			authorization: authorization

		});
		
	};
	oauthService.findAllActive = function(callback) {
		request.get('/oauthws/services/oauth/active',{},function(error, res, body){
			callback(res.statusCode,JSON.parse(body));
		});
	};


	return oauthService;
}
