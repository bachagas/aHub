/**
 * @author Alain
 */

var MainButt = require("/ui/common/RemoteControl/ButtonView/mainMenuButtons");
var MenuButt = require("/ui/common/RemoteControl/ButtonView/menuButtons");
var NumButt = require("/ui/common/RemoteControl/ButtonView/menuNumbers");

var MainButtons= require("/ui/common/mainMenuBar");


module.exports = function(sendData){
	var config=null;
	Read();
	function MainMenu(){
		createView('main');		
	}; // Power on-off, Mute, Vol Up, Vol down, Ch+,Ch-,Menu, Info, Input 
	function menuButtons(){
		createView('menu');
	}; // Enter, Exit, Up, Down, Left, Right,Back 
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
	function createView(who){
		
		var win = Ti.UI.createWindow({
			backgroundColor:'#fff',
			title: 'Assistive'
		});

		var buttons=[];
		var tableData = [];
		switch(who){
			case 'main':
				buttons=MainButt();
				break;
			case 'menu':
				buttons=MenuButt();
				break;
			case 'buttons':
				buttons=NumButt();
				break;
			default:
				break;
		}
		var row = Ti.UI.createTableViewRow({
				className:'buttonacc', // used to improve table performance
				backgroundColor:'white',
				rowIndex:0, // custom property, useful for determining the row during events
				height:Ti.UI.SIZE,
				scrollsToTop: true,
				top: '10%',   //'60dp'
				bottom: '10%'
		});
		var b=[];
		if(who=='buttons'){
			b=Titanium.UI.createButton({
					title: 'Exit',
					width: '45%',
					height: Titanium.UI.FILL,
					backgroundSelectedColor: 'red',
					backgroundColor:'blue',
					center: 'true', 
					left:  '3%'  //'10dp'
			});
			b.addEventListener('click',function(e){
				win.close();
			});
			row.add(b);
			b=Titanium.UI.createButton({
					title: 'OK',
					width: '45%',
					height: Titanium.UI.FILL,
					backgroundSelectedColor: 'red',
					backgroundColor:'blue', 
					right: '3%'   //'10dp'
			});
			b.addEventListener('click',function(e){
				sendData('#s '+config.dec.selected+',15'+'\n'); 
			});
			row.add(b);
		}
		else{
			b=Titanium.UI.createButton({
					title: 'Numbers',
					width: '45%',
					height: Titanium.UI.FILL,
					backgroundSelectedColor: 'red',
					backgroundColor:'blue',
					center: 'true', 
					left:  '3%'  //'10dp'
			});
			b.addEventListener('click',function(e){
				createView('buttons');
			});
			row.add(b);
		}
		tableData.push(row);
		row = Ti.UI.createTableViewRow({
				className:'buttonacc', // used to improve table performance
				backgroundColor:'white',
				rowIndex:0, // custom property, useful for determining the row during events
				height:Ti.UI.SIZE,
				scrollsToTop: true,
				top: '10%',   //'60dp'
				bottom: '10%'
		});
		var cant=0;
		buttons.forEach(function(val,index,ar){
			if(cant==2){
				tableData.push(row);
				row = Ti.UI.createTableViewRow({
					className:'buttonacc', // used to improve table performance
					backgroundColor:'white',
		//			rowIndex:index, // custom property, useful for determining the row during events
					height:  Ti.UI.SIZE,
				});
				cant=0;
			}
			if(index%2==0){
				b=Titanium.UI.createButton({
					title: val.name,
					width: '45%',
					height: Titanium.UI.FILL,
					backgroundSelectedColor: 'red',
					backgroundColor:'blue', 
					left:  '3%'  //'10dp'
				});
				
			}
			else{
				b=Titanium.UI.createButton({
					title: val.name,
					width: '45%',
					height: Titanium.UI.FILL,
					backgroundSelectedColor: 'red',
					backgroundColor:'blue',
					right: '3%'   //'10dp'
				});
			}
			var timer = 0;
			switch(val.id){
				case 'menu':
					b.addEventListener('click',function(e){
						sendData('#s '+config.tv.selected+','+val.click+'\n'); 
						menuButtons();
					});
					break;
				case 'exit':
					b.addEventListener('click',function(e){
						win.close();
						sendData('#s '+config.tv.selected+','+val.click+'\n'); 
					});
					break;
				case 'input':
					b.addEventListener('click',function(e){
						sendData('#s '+config.tv.selected+','+val.click+'\n'); 
						menuButtons();
					});
					break;
				case 'info':
				    b.addEventListener('click',function(e){
						sendData('#s '+config.tv.selected+','+val.click+'\n'); 
						menuButtons();
					});
					break;
				case 'volup':
					b.addEventListener('touchstart',function(e){
						timePressed = 0;
    					timer = setInterval(function(){
            			//here you can control how much time the button has been pressed
            			//vibrate the phone or anything else
           					timePressed=timePressed+100;
           					sendData('#s '+config.tv.selected+','+val.click+'\n');
        				},100);
					});
					b.addEventListener('touchend', function(e){
    					clearInterval(timer);
					});
					break;
				case 'voldown':
					b.addEventListener('touchstart',function(e){
						timePressed = 0;
    					timer = setInterval(function(){
            			//here you can control how much time the button has been pressed
            			//vibrate the phone or anything else
            				sendData('#s '+config.tv.selected+','+val.click+'\n');
        				},100);
					});
					b.addEventListener('touchend', function(e){
    					clearInterval(timer);
					});
					break;
				case 'chup':
					b.addEventListener('touchstart',function(e){
						timePressed = 0;
    					timer = setInterval(function(){
            			//here you can control how much time the button has been pressed
            			//vibrate the phone or anything else
            				sendData('#s '+config.tv.selected+','+val.click+'\n');
        				},100);
					});
					b.addEventListener('touchend', function(e){
    					clearInterval(timer);
					});
					break;
				case 'chdown':
					b.addEventListener('touchstart',function(e){
						timePressed = 0;
    					timer = setInterval(function(){
            			//here you can control how much time the button has been pressed
            			//vibrate the phone or anything else
            				sendData('#s '+config.tv.selected+','+val.click+'\n');
        				},100);
					});
					b.addEventListener('touchend', function(e){
    					clearInterval(timer);
					});
					break;
				default:
					b.addEventListener('click',function(e){
						sendData('#s '+config.tv.selected+','+val.click+'\n'); 
					});
					break;
			}
			row.add(b);
			cant++;
		}); 
		tableData.push(row);
		var tableView = Ti.UI.createTableView({
			backgroundColor:'white',
			data:tableData,
			height:Ti.UI.SIZE,
			width:Ti.UI.SIZE,
			top: '53dp'
		});
		win.add(MainButtons(win));
		win.add(tableView);
		win.open();
	};
	MainMenu();
};