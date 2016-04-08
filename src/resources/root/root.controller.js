'use strict';

// Get list of roots
exports.index = function*(next) {
	this.status = 403;
	this.body = {
		name : 'BackEnd Pasitos', 
		info : 'API Docs URL'
	};
};