/**
 * @author Alain
 */

var Save= require('/ui/common/Config/writeJSON');

module.exports =function(dev,elem){
	var conf={
				tv: {
					list: [],
					selected:0
				},
				dec: {
					list: [],
					selected:0
				}
			};
	Read();
	switch(dev){
		case 'TV':
			conf.tv.selected=elem;
			break;
		case 'DEC':
			conf.dec.selected=conf.tv.list.length + elem;
			break;
		default:
			break;
	}
	Save(conf);
	
	
	function Read(){
		var path= Titanium.Filesystem.externalStorageDirectory + 'config.json';
		if(Titanium.Filesystem.isExternalStoragePresent){
			var f = Ti.Filesystem.openStream(Ti.Filesystem.MODE_READ,path);
			var buffer = Ti.createBuffer({
				value:'                                                                                                                       '
			});
			f.read(buffer,0,255);
			f.close();
			var r=buffer.toString(); 
			if(r=='' || r==null){
				alert('No se leyo bin del archivo');
			}
			else{
				conf = JSON.parse(r);
			}
		}
		return;
	};
};