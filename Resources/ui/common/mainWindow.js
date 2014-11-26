/**
 * @author Alain
 */
var Celular= require("/ui/common/Mobile/celular");
var Tv= require("/ui/common/RemoteControl/tv");
var Dec= require("/ui/common/RemoteControl/decoder");
var Relay= require("/ui/common/Relay/relay");
var HeadSet= require("/ui/common/HeadSet/headset");

var mainMenuBar= require("/ui/common/mainMenuBar");

module.exports = function(sendData) {
	var win = Ti.UI.createWindow({
			backgroundColor:'#fff',
			title: 'Assistive'
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

		
