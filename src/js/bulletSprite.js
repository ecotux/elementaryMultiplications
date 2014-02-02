
function bulletSprite(canvas, posX, posY, num, FPS) {
	this.canvas = canvas;
	this.context2D = canvas.getContext('2d');

	this.canvasWidth = canvas.width;
	this.canvasHeight = canvas.height;

	this.MY_WIDTH = 25;
	this.MY_HEIGHT = 20;
	this.referencePixelX = 0;
	this.referencePixelY = this.MY_HEIGHT/2;

	// SPEED = bullet through the screen in 5 seconds
	this.SHIFTX = this.canvasWidth/(FPS*5);
	this.SHIFTY = this.canvasHeight/(FPS*5);

	this.x = posX;
	this.y = posY;

	this.num = num;
	this.numString = num.toString();
}

bulletSprite.prototype.setRefPixelPosition = function(x, y) {
	this.posX = x - this.referencePixelX;
	this.posY = y - this.referencePixelY;
}

bulletSprite.prototype.tick = function(dir) {
	return this.moveLeft();
}

bulletSprite.prototype.moveUp = function() {
	var ret = true;
	if( this.y >= this.SHIFTY + this.referencePixelY ) {
		this.y = this.y - this.SHIFTY;
		this.setRefPixelPosition(this.x, this.y);
		ret = false;
	}
	return ret;
}
	
bulletSprite.prototype.moveDown = function() {
	var ret = true;
	if( this.y <= (this.canvasHeight - this.SHIFTY - this.referencePixelY) ) {
		this.y = this.y + this.SHIFTY;
		this.setRefPixelPosition(this.x, this.y);
		ret = false;
	}
	return ret;
}

bulletSprite.prototype.moveLeft = function() {
	var ret = true;
	if( this.x >= this.SHIFTX + this.referencePixelX ) {
		this.x = this.x - this.SHIFTX;
		this.setRefPixelPosition(this.x, this.y);
		ret = false;
	}
	return ret;
}
	
bulletSprite.prototype.moveRight = function() {
	var ret = true;
	if( this.x <= (this.canvasWidth - this.SHIFTX - this.MY_WIDTH ) ) {
		this.x = this.x + this.SHIFTX;
		this.setRefPixelPosition(this.x, this.y);
		ret = false;
	}
	return ret;
}

bulletSprite.prototype.getNum = function() {
	return this.num;
}

bulletSprite.prototype.draw = function() {
	this.context2D.fillStyle = "rgb(0,0,0)";
	this.context2D.font = "1em Helvetica";
	this.context2D.textAlign = "left";
	this.context2D.textBaseline = "top";

	this.context2D.fillText(this.numString, this.posX, this.posY);
}

