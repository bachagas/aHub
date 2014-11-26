/**
 * @author Alain
 */

var MainButtons= require("/ui/common/mainMenuBar");
module.exports = function(sendData){
	var win = Ti.UI.createWindow({
			backgroundColor:'#fff',
			title: 'Assistive'
	});
	var b1=Titanium.UI.createButton({
					title: 'Computer',
					width: '45%',
					height: '60dp',
					backgroundSelectedColor: 'red',
					backgroundColor:'blue',
					center: 'true', 
					top: '100dp',
					left:  '3%'  //'10dp'
	});
	b1.addEventListener('click',function(e){
		sendData('#h 1'+'\n');
	});
	var b2=Titanium.UI.createButton({
					title: 'Mobile',
					width: '45%',
					height: '60dp',
					backgroundSelectedColor: 'red',
					backgroundColor:'blue',
					top: '100dp',
					right: '3%'   //'10dp'
	});
	b2.addEventListener('click',function(e){
		sendData('#h 2'+'\n');
	});
	
	win.add(MainButtons(win));
	win.add(b1);
	win.add(b2);
	win.open();
};