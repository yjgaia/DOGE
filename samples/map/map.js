
var startDragX;
var startDragY;

// create map.
var map = GO({
	image : 'map.jpg',
	x : 0,
	y : 0,
	c : P({
		style : {
			position : 'absolute',
			left : 10,
			top : 10,
			color : '#fff'
		},
		c : 'Drag Me!'
	}),
	on : {
		touchstart : function(e) {
			startDragX = e.getLeft() - map.getX();
			startDragY = e.getTop() - map.getY();
			e.stop();
		},
		touchend : function(e) {
			startDragX = undefined;
			startDragY = undefined;
		}
	}
});

EVENT('touchmove', function(e) {
	if (startDragX !== undefined) {
		map.move({
			x : e.getLeft() - startDragX,
			y : e.getTop() - startDragY
		});
	}
});
