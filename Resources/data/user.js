/**
 * @author Bruno
 */

var _user = "Admin"; // default

var _loaded = false;

var localDb = require('data/localDb');

exports.getCurrentUser = function() {
	if (!_loaded)
		_user = localDb.loadUser();
	_loaded = true;
	return _user;
};

exports.setCurrentUser = function(userName) {
	_user = userName;
	localDb.saveUser(_user);
};