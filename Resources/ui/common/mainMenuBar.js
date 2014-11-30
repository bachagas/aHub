

module.exports = function(win){
	var Conf= require("/ui/common/Config/configMainWindow");
		var view = Ti.UI.createView({
			height : "50dp",
			width : "100%",
			top : '0dp',
			backgroundColor : '#050505'
		});
		var b=Titanium.UI.createButton({
			title: 'Back',
			width: '35%',
			height: Titanium.UI.FILL,
			left:  '10%', 
		});
		b.addEventListener('click', function(e) {
			win.close(Titanium.UI.ANIMATION_CURVE_EASE_IN);	
		});
		view.add(b);
		b=Titanium.UI.createButton({
			title: 'Config',
			width: '35%',
			height: Titanium.UI.FILL,
			left:  '55%'  
		});
		b.addEventListener('click', function(e) {
			Conf();	
		});
		view.add(b);
		return view; 
};