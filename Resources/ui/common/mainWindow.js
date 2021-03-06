/**
 * @author Alain
 */

var Tv= require("/ui/common/Scenarios/tv");
var Dec= require("/ui/common/Scenarios/decoder");
var Relay= require("/ui/common/Scenarios/relay");
var HeadSet= require("/ui/common/Scenarios/headset");
var Computer = require("/ui/common/Scenarios/computer");

var mainMenuBar= require("/ui/common/mainMenuBar");

module.exports = function(sendData) {
	var win = Ti.UI.createWindow({
			backgroundColor:'#fff',
			title: 'aHub'
	});
	
	function controlW(e){
		switch(e.itemIndex){
			case 0:
				Tv(sendData);
				break;
			case 1:
			    Dec(sendData);
				break;
			case 2:
				Relay(sendData);
				break;
			case 3:
				HeadSet(sendData);
				break;
			case 4:
				Computer({title:"Computer"});
				break;
			default:
				break;
		}
	};
	function mainView(){
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
		data.push({
			rowtitle : {
				text : "Relay"
			},
			image : {
				image : "images/Icon_lamp.png"
			}
		});
		data.push({
			rowtitle : {
				text : "HeadSet"
			},
			image : {
				image : "images/Icon_headset.png"
			}
		});
		data.push({
			rowtitle : {
				text : "Computer"
			},
			image : {
				image : "images/Icon_computerWin.png"
			}
		});
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

		win.add(mainMenuBar(win));
		win.add(listView);
		win.open();
	};
	mainView();
};

		
