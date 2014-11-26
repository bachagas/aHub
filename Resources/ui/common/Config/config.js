/**
 * @author Alain
 */
var MainButtons= require("/ui/common/mainMenuBar");
var TVConf= require("/ui/common/Config/selectTV");
var DECConf= require("/ui/common/Config/selectDEC");

module.exports = function(){
	var win = Ti.UI.createWindow({
			backgroundColor:'#fff',
			title: 'Assistive'
	});
	function controlW(e){
		switch(e.itemIndex){
			case 0:
				TVConf();
				break;
			case 1:
			    DECConf();
				break;
			case 2:
				break;
			case 3:
				break;
			default:
				break;
		}
	};
	function mainConf(){
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
					click : controlW
				}
			}, 
			{
				type : 'Ti.UI.Label',
				bindId : 'rowtitle',
				properties : {
					left : '100dp'
				},
				events : {
					click : controlW
				}
			}
			]
		};
		data.push({
			rowtitle : {
				text : "TV"
			},
			image : {
				image : "images/Icon_tv.png"
			}
		});
		data.push({
			rowtitle : {
				text : "Decoder"
			},
			image : {
				image : "images/Icon_decoder.png"
			}
		});
		var listView = Ti.UI.createListView({
			top : '55dp',
			title: 'Configuration',
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
	mainConf();
};