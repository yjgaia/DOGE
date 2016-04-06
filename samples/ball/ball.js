
// create ball.
var ball = GO({
	image : 'ball.png',
	x : 50,
	y : 50,
	centerX : 20,
	centerY : 20
});

// 30 fps
LOOP(30, function(fps) {
	
	var x = ball.getX();
	var y = ball.getY();
	var centerX = 100;
	var centerY = 100;
	var angle = fps / 6;
	var radian = angle * (Math.PI / 180);
	
	// 회전
	ball.move({
		x : Math.cos(radian) * (x - centerX) - Math.sin(radian) * (y - centerY) + centerX,
		y : Math.sin(radian) * (x - centerX) + Math.cos(radian) * (y - centerY) + centerY,
		angle : ball.getAngle() + angle
	});
});
