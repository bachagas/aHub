function ConfigWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		//backgroundColor : 'white',
		theme: 'Dark'
	});

	var button = Ti.UI.createButton({
		height:44,
		//width:200,
		title:L('testUsb'),
		top:20
	});
	self.add(button);

	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		TestUsbWindow = require('ui/common/TestUsbWindow');
		var win = new TestUsbWindow(L('testUsb',"Test USB Communication"));
		/*self.containingTab.open(Ti.UI.createWindow({
			title: L('testUsb',"Test USB Communication"),
			backgroundColor: 'white'
		}));*/
		self.containingTab.open(win);
	});

	return self;
};

module.exports = ConfigWindow;
