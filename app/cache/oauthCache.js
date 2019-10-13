module.exports = function(app){
	const NodeCache = require( "node-cache" );
	const oauthCache = new NodeCache({ stdTTL: 0, checkperiod: 0 });
	var oauthService = app.services.v1.oauthService;
	var cache = {};

	cache.add = function(access_token,obj,expires){
		if (!expires){
			expires =  60 * 60;
		}
		oauthCache.set(access_token, obj, expires);
	}
	cache.find = function(access_token,callback){
		oauthCache.get(access_token.replace('Bearer ', ''), function( err, value ){
  			if( !err ){
    			callback(value);
    		}else{
    			console.log(err);
  			}
		});
	}

	cache.loadCache = function(){
		console.log('Loading cache...');
		oauthService.findAllActive(function(statusCode,tokens){
			if (statusCode == 200) {
				tokens.forEach(function(token){
					var millis = token.idOauth.expiresIn - new Date().getTime();
					console.log(Math.round(millis / 1000));
					cache.add(token.accessToken,token, Math.round(millis /1000));
				})
			} else {
				console.log('error loading cache!');
				
			}
			console.log('Finished loading cache...');
		})

	}
	cache.loadCache();
	return cache;
}