READY(function() {
	
	// sound caching
	SOUND({
        mp3 : 'shot.mp3'
    });
	
	// create ball.
	var ball = GO({
		image : 'ball.png',
		x : 70,
		y : 70,
		centerX : 20,
		centerY : 20
	});
	
	EVENT('rotarydetent', function(e) {
		
		var x = ball.getX();
		var y = ball.getY();
		var centerX = 180;
		var centerY = 180;
		var angle = 0;
		var direction = e.getDetail().direction;
		
		if (direction === 'CW') {
			angle = 18;
		} else if (direction === 'CCW') {
			angle = -18;
		}
		
		if (ball.getAngle() + angle === 0) {

			var
		    // sound
		    sound = SOUND({
		        mp3 : 'shot.mp3'
		    });
			
		    sound.play();
		}
		
		var radian = angle * (Math.PI / 180);
		
		ball.move({
			x : Math.cos(radian) * (x - centerX) - Math.sin(radian) * (y - centerY) + centerX,
			y : Math.sin(radian) * (x - centerX) + Math.cos(radian) * (y - centerY) + centerY,
			angle : ball.getAngle() + angle
		});
	});
	
	EVENT('tizenhwkey', function(e) {
		if (e.getKeyName() === 'back') {
			try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
		}
	});

	tizen.power.request('SCREEN', 'SCREEN_NORMAL');
	EVENT('visibilitychange', function() {
		if (HIDDEN() === true) {
			tizen.power.request('SCREEN', 'SCREEN_NORMAL');
		}
	});
});