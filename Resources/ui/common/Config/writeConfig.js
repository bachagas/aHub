/**
 * @author Alain
 */

var save= require('/ui/common/Config/writeJSON');


module.exports =function(mss){
	var config={
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
	function processConfig(mss){
		
		if(mss[0]=='#'){
			mss=mss.substring(1,mss.length);
			if(mss[0]=='t' && mss[1]=='v'){
				mss=mss.substring(3,mss.length);
				alert(mss);
				var arg=mss.split(',');
				config.tv.list=arg;
			}
			else if(mss[0]=='d' && mss[1]=='e'){
				mss=mss.substring(3,mss.length);
				var arg=mss.split(','); 
				config.dec.list=arg;
			}
			save(config);
		}
	};
	function Read(){
		var path= Titanium.Filesystem.externalStorageDirectory + 'config.json';
		if(Titanium.Filesystem.isExternalStoragePresent){
			
			try{
					var f = Ti.Filesystem.openStream(Ti.Filesystem.MODE_READ,path);
					var buffer = Ti.createBuffer({
						value:'                                                                                                                       '
					});
					f.read(buffer,0,255);
					f.close();	
					var r=buffer.toString(); 
					if(r!='' && r!=null){
						config = JSON.parse(r);
					}
			}catch(e){
				return;
			};
		}
		return;
	};
	processConfig(mss);
};
