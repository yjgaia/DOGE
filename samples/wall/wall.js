READY(function() {
	
	// create ball.
	var ball = GO({
		image : 'ball.png',
		x : 50,
		y : 100,
		centerX : 20,
		centerY : 20
	});
	
	// create wall.
	var wall = GO({
		image : 'wall.png',
		x : 500,
		y : 350,
		centerX : 50,
		centerY : 300
	});
	
	var isWallDown = false;
	
	// 30 fps
	var loop = LOOP(30, function(fps) {
		
		if (isWallDown !== true) {
			
			ball.move({
				x : ball.getX() + 10
			});
			
			if (ball.getX() + ball.getCenterX() > wall.getX() - wall.getCenterX()) {
				isWallDown = true;
			}
		}
		
		else {
			
			var angle = wall.getAngle() + fps / 6;
			
			// 회전
			if (angle > 90) {
				angle = 90;
			}
			
			wall.move({
				angle : angle
			});
		}
	});
	
	EVENT('visibilitychange', function() {
		if (HIDDEN() === true) {
			loop.pause();
		} else {
			loop.resume();
		}
	});
});
