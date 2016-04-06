/**
 * Game Object 
 */
global.GO = CLASS({
	
	init : function(inner, self, params) {
		//REQUIRED: params
		//OPTIONAL: params.image
		//OPTIONAL: params.x
		//OPTIONAL: params.y
		//OPTIONAL: params.centerX
		//OPTIONAL: params.centerY
		//OPTIONAL: params.angle
		//OPTIONAL: params.c
		//OPTIONAL: params.on
		
		var
		// image
		image = params.image,
		
		// x
		x = params.x === undefined ? 0 : params.x,
		
		// y
		y = params.y === undefined ? 0 : params.y,
		
		// center x
		centerX = params.centerX === undefined ? 0 : params.centerX,
		
		// center y
		centerY = params.centerY === undefined ? 0 : params.centerY,
		
		// angle
		angle = params.angle === undefined ? 0 : params.angle,
		
		// c
		c = params.c,
		
		// on
		on = params.on,
		
		// div
		div,
		
		// img
		img,
		
		// set image.
		setImage,
		
		// move.
		move,
		
		// get x.
		getX,
		
		// get y.
		getY,
		
		// get center x.
		getCenterX,
		
		// get center y.
		getCenterY,
		
		// get angle.
		getAngle,
		
		// get width.
		getWidth,
		
		// get height.
		getHeight;
		
		div = DIV({
			style : {
				position : 'absolute'
			},
			c : c,
			on : on
		}).appendTo(BODY);
		
		self.setImage = setImage = function(image) {
			//REQUIRED: image
			
			if (img === undefined) {
				div.prepend(img = IMG({
					src : image
				}));
			} else {
				img.setSrc(image);
			}
		};
		
		if (image !== undefined) {
			setImage(image);
		}
		
		self.move = move = function(position) {
			//REQUIRED: position
			//OPTIONAL: position.x
			//OPTIONAL: position.y
			//OPTIONAL: position.centerX
			//OPTIONAL: position.centerY
			//OPTIONAL: position.angle
			
			if (position.x !== undefined) {
				x = position.x;
			}
			
			if (position.y !== undefined) {
				y = position.y;
			}
			
			if (position.centerX !== undefined) {
				centerX = position.centerX;
			}
			
			if (position.centerY !== undefined) {
				centerY = position.centerY;
			}
			
			if (position.angle !== undefined) {
				angle = position.angle;
			}
			
			div.addStyle({
				left : x,
				top : y,
				marginLeft : -centerX,
				marginTop : -centerY,
				transformOrigin : centerX + 'px ' + centerY + 'px',
				transform : 'rotate(' + angle + 'deg)'
			});
		};
		
		move(params);
		
		self.getX = getX = function() {
			return x;
		};
		
		self.getY = getY = function() {
			return y;
		};
		
		self.getCenterX = getCenterX = function() {
			return centerX;
		};
		
		self.getCenterY = getCenterY = function() {
			return centerY;
		};
		
		self.getAngle = getAngle = function() {
			return angle;
		};
		
		self.getWidth = getWidth = function() {
			if (img === undefined) {
				return 0;
			} else {
				return img.getWidth();
			}
		};
		
		self.getHeight = getHeight = function() {
			if (img === undefined) {
				return 0;
			} else {
				return img.getHeight();
			}
		};
	}
});

