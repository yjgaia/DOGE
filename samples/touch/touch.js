
// create man.
var man = GO({
	image : 'man.png',
	x : 50,
	y : 50,
	c : P({
		style : {
			position : 'absolute',
			left : 35,
			top : 180,
			color : '#fff'
		},
		c : 'Touch Me!'
	}),
	on : {
		tap : function() {
			alert('Yeah~!');
		}
	}
});
