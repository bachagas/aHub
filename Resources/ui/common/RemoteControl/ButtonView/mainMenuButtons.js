

module.exports = function(){
    // Power on-off, Mute, Vol Up, Vol down, Ch+,Ch-,Menu, Info, Input
	var buttons=[
		{
		    id : 'power',
			name : 'Power',
			backgroundimg : '',
			click : '0'
		},
		{
		    id : 'mute',
			name : 'Mute',
			backgroundimg : '',
			click : '19'
		},
		{
		    id : 'volup',
			name : 'Vol+',
			backgroundimg : '',
			click : '1'
		},
		{
		    id : 'voldown',
			name : 'Vol-',
			backgroundimg : '',
			click : '2'
		},
		{
		    id : 'chup',
			name : 'CH+',
			backgroundimg : '',
			click : '3'
		},
		{
		    id : 'chdown',
			name : 'CH-',
			backgroundimg : '',
			click : '4'
		},
		{
		    id : 'menu',
			name : 'Menu',
			backgroundimg : '',
			click : '16'
		},
		{
		    id : 'info',
			name : 'Info',
			backgroundimg : '',
			click : '24'
		},
		{
		    id :'input',
			name : 'Input',
			backgroundimg : '',
			click : '18'
		},
		{
		    id : 'exit',
			name : 'Exit',
			backgroundimg : '',
			click : '25'
		}
	];
	return buttons;
};