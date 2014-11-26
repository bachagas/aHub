/**
 * @author Alain
 */

var Write= require('/ui/common/Config/writeConfig');
var Set= require("/ui/common/Config/setSelected");
var Config= require("/ui/common/Config/config");


module.exports = function(mss){
	var config=null;
	Read();
	if(config==null){
		// Set default config
		Write('#tv LGTV,SMTV');
		Write('#de NET');
		Set('TV',0);
		Set('DEC',0);
		Config();
	}
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
};