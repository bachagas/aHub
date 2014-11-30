/**
 * @author Alain
 */

var Config= require("/data/config");

var MainButtons= require("/ui/common/mainMenuBar");

module.exports =function(){
	//var config=null;
	//Read();
	var config = Config.getCurrentConfig();
	var win = Ti.UI.createWindow({
			backgroundColor:'#fff',
			title: 'aHub'
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
						Config.setCurrentConfig('TV',e.itemIndex);
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
						Config.setCurrentConfig('TV',e.itemIndex);
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
							image : "images/Icon_tv.png"
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

	mainTV();
};