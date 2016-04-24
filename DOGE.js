/**
 * Layer
 */
global.LAYER = CLASS({
	
	preset : function() {
		'use strict';

		return NODE;
	},
	
	init : function(inner, self, params) {
		//REQUIRED: params
		//OPTIONAL: params.x
		//OPTIONAL: params.y
		//OPTIONAL: params.centerX
		//OPTIONAL: params.centerY
		//OPTIONAL: params.angle
		//OPTIONAL: params.c
		//OPTIONAL: params.on
		
		var
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
		
		// parent center x
		parentCenterX = 0,
		
		// parent center y
		parentCenterY = 0,
		
		// div
		div,
		
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
			}
		}).appendTo(BODY);
		
		inner.setDom(div);
		
		self.move = move = function(position) {
			//OPTIONAL: position
			//OPTIONAL: position.x
			//OPTIONAL: position.y
			//OPTIONAL: position.centerX
			//OPTIONAL: position.centerY
			//OPTIONAL: position.angle
			
			if (position !== undefined) {
				
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
			}
			
			div.addStyle({
				left : x,
				top : y,
				marginLeft : parentCenterX - centerX,
				marginTop : parentCenterY - centerY,
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
		
		OVERRIDE(self.appendTo, function(origin) {
			
			self.appendTo = appendTo = function(node) {
				//REQUIRED: node
				
				if (node.checkIsInstanceOf(LAYER) === true) {
					
					parentCenterX = node.getCenterX();
					parentCenterY = node.getCenterY();
					
					move();
				}
				
				return origin(node);
			};
		});
	}
});

/**
 * Game Object 
 */
global.GO = CLASS({
	
	preset : function() {
		'use strict';

		return LAYER;
	},
	
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
		
		// img
		img,
		
		// set image.
		setImage;
		
		self.setImage = setImage = function(image) {
			//REQUIRED: image
			
			if (img === undefined) {
				self.prepend(img = IMG({
					src : image
				}));
			} else {
				img.setSrc(image);
			}
		};
		
		if (image !== undefined) {
			setImage(image);
		}
	}
});

/**
 * Tile
 */
global.TILE = CLASS({
	
	preset : function() {
		'use strict';

		return LAYER;
	},
	
	init : function(inner, self, params) {
		//REQUIRED: params
		//OPTIONAL: params.image
		//OPTIONAL: params.x
		//OPTIONAL: params.y
		//OPTIONAL: params.centerX
		//OPTIONAL: params.centerY
		//OPTIONAL: params.xCount
		//OPTIONAL: params.yCount
		//OPTIONAL: params.angle
		//OPTIONAL: params.c
		//OPTIONAL: params.on
		
		var
		// image
		image = params.image,
		
		// x count
		xCount = params.xCount,
		
		// y count
		yCount = params.yCount,
		
		// children
		children = [],
		
		// set image.
		setImage,
		
		// get x count.
		getXCount,
		
		// get y count.
		getYCount;
		
		self.setImage = setImage = function(image) {
			//REQUIRED: image
			
			EACH(children, function(child) {
				child.remove();
			});
			child = [];
			
			REPEAT(yCount, function(y) {
				
				REPEAT(xCount, function(x) {
					
					var
					// img
					img = IMG({
						style : {
							float : 'left'
						},
						src : image
					});
					
					if (y === 0 && x === 0) {
						img.on('load', function() {
							self.addStyle({
								width : img.getWidth() * xCount
							});
						});
					}
					
					child.push(img);
					
					self.append(img);
				});
			});
		};
		
		if (image !== undefined) {
			setImage(image);
		}
		
		self.getXCount = getXCount = function() {
			return xCount;
		};
		
		self.getYCount = getYCount = function() {
			return yCount;
		};
	}
});