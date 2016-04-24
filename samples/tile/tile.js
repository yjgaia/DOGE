READY(function() {
	
	var startDragX;
	var startDragY;
	
	// create tile.
	var tile = TILE({
		image : 'tile.jpg',
		x : WIN_WIDTH() / 2,
		y : WIN_HEIGHT() / 2,
		centerX : 300 * 2.5,
		centerY : 300 * 2.5,
		xCount : 5,
		yCount : 5,
		c : GO({
			x : 0,
			y : 100,
			centerX : 123,
			centerY : 244,
			image : 'tree-1.png'
		}),
		on : {
			touchstart : function(e) {
				startDragX = e.getLeft() - tile.getX();
				startDragY = e.getTop() - tile.getY();
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
			tile.move({
				x : e.getLeft() - startDragX,
				y : e.getTop() - startDragY
			});
		}
	});
});