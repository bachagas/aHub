

//var Init= require('/data/ConfigOld/init');

var USBSERIAL = require('jp.isisredirect.usbserial');
Ti.API.info("module is => " + USBSERIAL);

USBSERIAL.addEventListener(USBSERIAL.RECEIVED, function(e) {
//	conTextField.value += '\n' + e.data.length + ":" + e.data +";";
//	alert(e.data);
});

USBSERIAL.open();
function sendData(data){
	var buffer = Ti.createBuffer({
		value:data
	});
	USBSERIAL.sendData(buffer);
//	alert(data);
};
var conTextField = Ti.UI.createTextArea({
	title : 'send',
	editable : false,
	verticalAlign : 'top',
	enableReturnKey : false,
	height : '70%',
	width : '90%',
	top : '5%',
	left : '5%'
});
//conTextField.value += '\ndevice' + USBSERIAL.getDeviceName();

(function(){
	var Mang = require("/ui/common/mainWindow");
	Mang(sendData);
})();
