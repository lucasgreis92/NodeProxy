var PropertiesReader = require('properties-reader');
var prop = PropertiesReader('./config/application.properties');
var properties = {
	DtoServer: prop.get('DTO_SERVER'),
	WildFlyServer: prop.get('WILDFLY_SERVER'),
	OauthServer: prop.get('OAUTH_SERVER')
	
}
module.exports = properties;