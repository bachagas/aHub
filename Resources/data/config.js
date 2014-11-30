/**
 * @author Bruno
 */

//default configuration:
var _config = {
				tv: {
					list: ["LG","Samsung"],
					selected:0
				},
				dec: {
					list: ["Net"],
					selected:2 //0 + _config.tv.list.length // --> the decoder index starts counting after the TV list because of the data structure in the Arduino (aDock)
				},
				comp: {
					server: "192.168.0.104",
					port: 9898
				}
			};

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

exports.getCurrentConfig = function() {
	if (!_loaded) {
		var tmp = readConfig();
		if (tmp) _config = tmp;
	}
	return _config;
};

exports.setCurrentConfig = function(conf) {
	_config = conf;
	saveConfig();
};

exports.setCurrentConfig =function(dev,elem){
	switch(dev){
		case 'TV':
			_config.tv.selected=elem;
			break;
		case 'DEC':
			_config.dec.selected=_config.tv.list.length + elem;
			break;
		case 'COMP': 
			if (_config.comp==null) {
				_config.comp = {server: "192.168.0.104",port: 9898};
			}
			if (elem.server) _config.comp.server=elem.server;
			if (elem.port) _config.comp.port=elem.port;
			break;
		default:
			break;
	};
	saveConfig();
};

	
function readConfig() {
	var path= Titanium.Filesystem.externalStorageDirectory + 'config.json';
	if(Titanium.Filesystem.isExternalStoragePresent){
		var file = Ti.Filesystem.getFile(Titanium.Filesystem.externalStorageDirectory,'config.json');
		if (file.exists()) {
			var blob = file.read();
			_config = JSON.parse(blob.text);
			file = null;
			blob = null;
		} else saveConfig();
	}
	_loaded = true;
	return _config;
};

function saveConfig() {
	var path= Titanium.Filesystem.externalStorageDirectory + 'config.json';
	if(Titanium.Filesystem.isExternalStoragePresent){
		
		var buffer = Ti.createBuffer({
			value:JSON.stringify(_config)
		});
		var f = Ti.Filesystem.openStream(Ti.Filesystem.MODE_WRITE,path);
		f.write(buffer,0,buffer.length); 
		f.close();
	}
};