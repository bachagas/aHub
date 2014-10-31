function ApplicationTabGroup(Window) {
	//create module instances
	var self = Ti.UI.createTabGroup(),
		HomeWindow = require('ui/common/HomeWindow'),
		ConfigWindow = require('ui/common/ConfigWindow');

	//create app tabs
	var win1 = new HomeWindow(L('home')),
		win2 = new ConfigWindow(L('settings'));

	var tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;

	var tab2 = Ti.UI.createTab({
		title: L('settings'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;

	self.addTab(tab1);
	self.addTab(tab2);

	return self;
};

module.exports = ApplicationTabGroup;
