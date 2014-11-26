

module.exports = function(){
    // Power on-off, Mute, Vol Up, Vol down, Ch+,Ch-,Menu, Info, Input
	var buttons=[
		{
		    id : 'exit',
			name : 'Exit',
			backgroundimg : '',
			click : '25'
		},
		{
		    id : 'ok',
			name : 'Enter (OK)',
			backgroundimg : '',
			click : '15'
		},
		{
		    id : 'up',
			name : 'Up',
			backgroundimg : '',
			click : '20'
		},
		{
		    id : 'down',
			name : 'Down',
			backgroundimg : '',
			click : '21'
		},
		{
		    id : 'left',
			name : 'Left',
			backgroundimg : '',
			click : '22'
		},
		{
		    id : 'right',
			name : 'Right',
			backgroundimg : '',
			click : '23'
		}
	];
	return buttons;
};