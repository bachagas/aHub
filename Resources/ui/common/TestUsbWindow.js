function TestUsbWindow(title) {	
	// open a single window
	var self = Ti.UI.createWindow({
		title: title,
		//backgroundColor : 'white',
		theme: 'Dark'
	});
	var clearbutton = Ti.UI.createButton({
		title: 'clear',
		height: '7%',
		width: '35%',
		top: '90%',
		left: '65%'
	});
	var sendbutton = Ti.UI.createButton({
		title: 'send',
		height: '7%',
		width: '35%',
		top: '80%',
		left: '65%'
	});
	var sendText = Ti.UI.createTextArea({
		title: 'send',
		height: '10%',
		width: '57%',
		top: '80%',
		left: '5%'
	});
	var conTextField = Ti.UI.createTextArea({
		title: 'send',
		editable: false,
		verticalAlign: 'top',
		enableReturnKey: false,
		height: '70%',
		width: '90%',
		top: '5%',
		left: '5%'
	});
	self.add(clearbutton);
	self.add(conTextField);
	self.add(sendText);
	self.add(sendbutton);
	
	var USBSERIAL = require('jp.isisredirect.usbserial');
	Ti.API.info("module is => " + USBSERIAL);
	
	clearbutton.addEventListener("click", function(e) {
		conTextField.value = "";
		conTextField.value += 'Connected to device: ' + USBSERIAL.getDeviceName() + '\n';
		conTextField.value += '-----------------------------------\n\n';
		sendText.value = ""; 
	});
	
	sendbutton.addEventListener("click", function(e) {
		var buffer = Ti.createBuffer({
			value:sendText.value
		});
		USBSERIAL.sendData(buffer);
	});
	
	USBSERIAL.addEventListener(USBSERIAL.RECEIVED, function(e) {
		//conTextField.value += '\n' + e.data.length + ":" + e.data +";";
		conTextField.value += e.data;
		var toast = Ti.UI.createNotification({
		    message:"Received " + e.data.length + " bytes",
		    duration: Ti.UI.NOTIFICATION_DURATION_SHORT
		});
		toast.show();
	});
	
	//USBSERIAL.open();
	//For communicating with the computer, use one of these rates: 300, 600, 1200, 2400, 4800, 9600, 14400, 19200, 28800, 38400, 57600, or 115200
	//and use the default 8 data bits, no parity, one stop bit.
	//See: http://arduino.cc/en/pmwiki.php?n=Serial/Begin
	//USBSERIAL.open( int baudRate, int dataBits, int stopBits, int parity);
	if (USBSERIAL.open(115200, 8, 1, 0)) {
		conTextField.value += 'Connected to device: ' + USBSERIAL.getDeviceName() + '\n';
		conTextField.value += '-----------------------------------\n\n';
		var notification = Ti.Media.createSound({url:Ti.Filesystem.getResRawDirectory() + 'notification.mp3'});
		notification.play();
	} else {
		conTextField.value = "Ops! Could not connect to Arduino :-(\nAre you sure you have connected it properly?";
	}
	
	return self;
};

module.exports = TestUsbWindow;