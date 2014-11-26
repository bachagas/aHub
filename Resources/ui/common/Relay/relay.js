/**
 * @author Alain
 */
var MainButtons= require("/ui/common/mainMenuBar");
module.exports = function(sendData){
	var win = Ti.UI.createWindow({
			backgroundColor:'#fff',
			title: 'Assistive'
	});
	var b=Titanium.UI.createButton({
					title: 'ON',
					width: '60%',
					height: '60dp',
					backgroundSelectedColor: 'red',
					backgroundColor:'blue', 
					left:  '20%',  //'10dp'
					top: '100dp'
	});
	var status=true;
	b.addEventListener('click',function(e){
		if(status){
			sendData('#r ON'+'\n');	
			status=false;
			b.title='OFF';
		}
		else{
			sendData('#r OFF'+'\n');
			status=true;
			b.title='ON';
		}
	});
	
	win.add(MainButtons(win));
	win.add(b);
	
	win.open();
};