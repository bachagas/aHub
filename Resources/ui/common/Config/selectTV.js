/**
 * @author Alain
 */



var Set= require("/ui/common/Config/setSelected");

var MainButtons= require("/ui/common/mainMenuBar");

module.exports =function(){
	var config=null;
	Read();
	var win = Ti.UI.createWindow({
			backgroundColor:'#fff',
			title: 'Assistive'
		});
	function mainTV(){
		var data=[];
	
		var template = {
			childTemplates : [
			{
				type : 'Ti.UI.Button',
				bindId : 'image',
				properties : {
					left : '2dp',
				},
				events : {
					click : function(e){
						Set('TV',e.itemIndex);
						win.close();
					}
				}
			}, 
			{
				type : 'Ti.UI.Label',
				bindId : 'rowtitle',
				properties : {
					left : '100dp'
				},
				events : {
					click : function(e){
						Set('TV',e.itemIndex);
						win.close();
					}
				}
			}
			]
		};
		
		config.tv.list.forEach(
			function(val,index,ar){
				data.push({
					rowtitle : {
						text : val
						},
					image : {
							image : "TV_icon.png"
						}
				});	
			}	
		);
		
		var listView = Ti.UI.createListView({
			top : '55dp',
			templates : {
				'plain' : template
			},
			defaultItemTemplate : 'plain',
		});
		var section = Ti.UI.createListSection({
			items : data
		});
		listView.sections = [section];

		win.add(MainButtons(win));
		win.add(listView);
		win.open();
	};
	function Read(){
		var path= Titanium.Filesystem.externalStorageDirectory + 'config.json';
		if(Titanium.Filesystem.isExternalStoragePresent){
			var f = Ti.Filesystem.openStream(Ti.Filesystem.MODE_READ,path);
			var buffer = Ti.createBuffer({
				value:'                                                                                                                       '
			});
			try{
				f.read(buffer,0,255);	
			}catch(e){
				return;
			};
			
			f.close();
			var r=buffer.toString(); 
			if(r!='' && r!=null){
				config = JSON.parse(r);
			}
		}
		return;
	};
	mainTV();
};