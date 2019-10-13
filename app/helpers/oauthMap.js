module.exports = function(app) {
	
	var oauthMap = {};
	
	oauthMap.convertToDTO = function(obj){
		var dto = {
			access_token : obj.accessToken,
			token_type : obj.idOauth.tokenType,
			refresh_token : obj.idOauth.refreshToken,
			expires_in : obj.expiresIn
		};
		return dto;
	}
	oauthMap.convertToDTOList = function(list){
		var retList = [];
		if (list){
			list.forEach(function(element){
				retList.push(oauthMap.convertToDTO(element));
			});
		}
		return retList;
	}

	oauthMap.convertToObject = function(dto,obj){
		obj = {

		}
		return obj;
	}

	oauthMap.convertToObjectList = function(list){
		var retList = [];
		if (list){
			list.forEach(function(element){
				retList.push(oauthMap.convertToObject(element));
			});
		}
		return retList;
	}


	return oauthMap;
}