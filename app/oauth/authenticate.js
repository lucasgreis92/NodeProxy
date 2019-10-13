
module.exports = function(app){

  var authenticate  = {};
  var oauthService = app.services.v1.oauthService;
  var oauthMap = app.helpers.oauthMap;
  var oauthCache = app.cache.oauthCache;
  authenticate.doAuthenticate = function(req, res){

  	oauthService.doAuthenticate(req.params.urlProduto, req.headers.grant_type, 
  		req.headers.client_id, req.headers.client_secret, req.headers.username, 
  		req.headers.password, req.headers.refresh_token, req.headers.authorization,
  		function(statusCode,body){
  			if (statusCode == 200) {
  				oauthCache.add(body.accessToken,body);
				res.send(oauthMap.convertToDTO(body));		
			} else {
				res.status(statusCode).send(body)
				
			}
  		});  	
    
  };
  authenticate.validateToken = function(authorization,succes,error){
    succes({});  
  } 
  authenticate.validateTokennnn = function(authorization,succes,error){
  	if (authorization 
  		&& authorization.startsWith("Bearer ")){  		
	  	oauthCache.find(authorization,function(value){
	  		if (value == undefined){
	  			error(401,'Invalid token');
	  		}else{
	  			if (value.expiresIn < new Date().getTime()){
	  				error(401,'Token expired');
	  			}else{
	  				succes(value);	
	  			}
	  		}
	  	});
  	}else{
  		error(401,'Invalid token');
  	}	
  }
  return authenticate;


}