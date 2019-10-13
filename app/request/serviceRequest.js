var request = require('request');
var properties = require('../properties/properties');

var serviceRequest = {
	
	get: function(url,params,callback){
		var opt = {
			url: properties.OauthServer + url,
			headers: {
				"content-type": "application/json",
				"accept":"application/json"
			},
			rejectUnauthorized: false,
			qs: params
		};
		request(opt, callback);
	},
	post: function(url,body,callback,headers){
		console.log(properties.OauthServer);
		var opt = {
			url: properties.OauthServer + url,
			headers: {
				"content-type": "application/json",
				"accept":"application/json"
			},
			rejectUnauthorized: false,
			body: body,
			json: true
		};	
		if (headers){
			opt.headers = headers;
		}
		request.post(opt, callback);
	},
	delete: function(url,params,callback){
		var opt = {
			url: properties.OauthServer + url,
			headers: {
				"content-type": "application/json",
				"accept":"application/json"
			},
			rejectUnauthorized: false,
			qs: params
		};
		request.delete(opt, callback);
	}


};

module.exports = serviceRequest;