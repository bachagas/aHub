/**
 * @author Alain
 */

module.exports =function (conf){
		var path= Titanium.Filesystem.externalStorageDirectory + 'config.json';
		if(Titanium.Filesystem.isExternalStoragePresent){
			
			var buffer = Ti.createBuffer({
				value:JSON.stringify(conf)
			});
			var f = Ti.Filesystem.openStream(Ti.Filesystem.MODE_WRITE,path);
			f.write(buffer,0,buffer.length); 
			f.close();
		}
	};