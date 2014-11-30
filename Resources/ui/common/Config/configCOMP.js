/**
 * @author Bruno
 */

var Config= require("/data/config");

var MainButtons= require("/ui/common/mainMenuBar");

module.exports =function(){

	var config = Config.getCurrentConfig();

	var win = Ti.UI.createWindow({
			//backgroundColor:'#fff',
			title: 'aHub'
		});
	var labelServer = Ti.UI.createLabel({
		text: "Server:",
		color: 'white',
		top: '10%',
		left: '5%',
  		width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	var serverField = Ti.UI.createTextField({
		title: 'server',
		top: '10%',
		left: '50%',
		height: '10%',width: '50%'
		//width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	var labelPort = Ti.UI.createLabel({
		text: "Port:",
		color: 'white',
		top: '25%',
		left: '10%',
  		width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	var portField = Ti.UI.createTextField({
		title: 'port',
		//editable: false,
		//verticalAlign: 'top',
		//enableReturnKey: false,
		top: '25%',
		left: '50%',
		height: '10%',width: '50%'
		//width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	var testButton = Ti.UI.createButton({
		title: 'test',
		//height: '7%', width: '35%',
		top: '50%',
		left: '10%',
		width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	var saveButton = Ti.UI.createButton({
		title: 'save',
		//height: '7%', width: '35%',
		top: '50%',
		left: '50%',
		width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});

	if (config!=null) 
		if (config.comp!=null) {
			if (config.comp.server) serverField.setValue(config.comp.server);
			if (config.comp.port) portField.setValue(config.comp.port);
		}
	win.add(labelServer);
	win.add(serverField);
	win.add(labelPort);
	win.add(portField);
	win.add(testButton);
	win.add(saveButton);
	
	testButton.addEventListener("click", function(e) {
		//TODO
	});
	
	saveButton.addEventListener("click", function(e) {
		Config.setCurrentConfig('COMP',{server: serverField.value, port: portField.value});
		win.close();
	});
	
	win.open();
		
};