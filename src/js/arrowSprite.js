
function arrowSprite(canvas, posX, posY, FPS) {
	this.canvas = canvas;
	this.context2D = canvas.getContext('2d');

	this.canvasWidth = canvas.width;
	this.canvasHeight = canvas.height;

	this.arrowImg = new Image();
	this.arrowImg.src = "images/freccia.png";
	this.MY_WIDTH = 17;
	this.MY_HEIGHT = 9;
	this.referencePixelX = this.MY_WIDTH-1;
	this.referencePixelY = this.MY_HEIGHT/2;

	// SPEED = arrow through the screen in 3 sec
	this.SHIFTX = this.canvasWidth/(3*FPS);
	this.SHIFTY = this.canvasHeight/(3*FPS);

	this.x = posX;
	this.y = posY;
}

arrowSprite.prototype.setRefPixelPosition = function(x, y) {
	this.posX = x - this.referencePixelX;
	this.posY = y - this.referencePixelY;
}

arrowSprite.prototype.tick = function(dir) {
	return this.moveRight();
}

arrowSprite.prototype.moveUp = function() {
	var ret = true;
	if( this.y >= this.SHIFTY + this.referencePixelY ) {
		this.y = this.y - this.SHIFTY;
		this.setRefPixelPosition(this.x, this.y);
		ret = false;
	}
	return ret;
}
	
arrowSprite.prototype.moveDown = function() {
	var ret = true;
	if( this.y <= (this.canvasHeight - this.MY_HEIGHT - this.SHIFTY - this.referencePixelY) ) {
		this.y = this.y + this.SHIFTY;
		this.setRefPixelPosition(this.x, this.y);
		ret = false;
	}
	return ret;
}

arrowSprite.prototype.moveLeft = function() {
	var ret = true;
	if( this.x >= this.SHIFTX + this.referencePixelX ) {
		this.x = this.x - this.SHIFTX;
		this.setRefPixelPosition(this.x, this.y);
		ret = false;
	}
	return ret;
}
	
arrowSprite.prototype.moveRight = function() {
	var ret = true;
	if( this.x <= (this.canvasWidth - this.SHIFTX ) ) {
		this.x = this.x + this.SHIFTX;
		this.setRefPixelPosition(this.x, this.y);
		ret = false;
	}
	return ret;
}

arrowSprite.prototype.draw = function() {
	this.context2D.drawImage(this.arrowImg,this.posX,this.posY);
}

