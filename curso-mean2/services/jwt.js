'use strict'


var jwt = require('jwt-simple'); // importar jwt
var secret = 'clave_secreta_curso'; //importa o cargar en un momento
var moment = require('moment');

exports.createToken = function(user){
	var payload = {
		sub: user._id,
		name: user.name,
		surname: user.surname,
		email:user.email,
		role: user.role,
		image: user.image,
		iat: moment().unix(),
		exp: moment().add(30, 'days').unix
	};
	return jwt.encode(payload, secret);
}