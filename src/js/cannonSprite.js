
const ARROW_HEIGHT = 20;
const ARROW_WIDTH = 35;

function cannonSprite(canvas) {
	this.canvas = canvas;
	this.context2D = canvas.getContext('2d');

	this.canvasWidth = canvas.width;
	this.canvasHeight = canvas.height;

	this.cannonImg = Mult.data.get("CANNON");
	this.MY_WIDTH = 40;
	this.MY_HEIGHT = 50;
	this.referencePixelX = 0;
	this.referencePixelY = 0;
	
	this.SHIFTX = 20;
	this.SHIFTY = 20;

	this.init();
}

cannonSprite.prototype.init = function() {
	this.x = 0;
	this.y = 0;
	this.orbital = 0;

	this.posX = 0;
	this.posY = 0;
	this.setRefPixelPosition(this.x, this.y);
}

cannonSprite.prototype.setRefPixelPosition = function(x, y) {
	this.posX = x - this.referencePixelX;
	this.posY = y - this.referencePixelY;
}

cannonSprite.prototype.tick = function(dir) {
	if( dir == "UP" ) {
		this.moveUp();
	}
	if( dir == "DOWN" ) {
		this.moveDown();
	}
}

cannonSprite.prototype.moveUp = function() {
	var ret = true;
	if( this.y >= this.SHIFTY + this.referencePixelY ) {
		this.y = this.y - this.SHIFTY;
		this.setRefPixelPosition(this.x, this.y);
		this.orbital--;
		ret = false;
	}
	return ret;
}
	
cannonSprite.prototype.moveDown = function() {
	var ret = true;
	if( this.y <= (this.canvasHeight - this.MY_HEIGHT - this.SHIFTY - this.referencePixelY ) ) {
		this.y = this.y + this.SHIFTY;
		this.setRefPixelPosition(this.x, this.y);
		this.orbital++;
		ret = false;
	}
	return ret;
}

cannonSprite.prototype.moveLeft = function() {
	var ret = true;
	if( this.x >= this.SHIFTX + this.referencePixelX ) {
		this.x = this.x - this.SHIFTX;
		this.setRefPixelPosition(this.x, this.y);
		ret = false
	}
	return ret;
}
	
cannonSprite.prototype.moveRight = function() {
	var ret = true;
	if( this.x <= (this.canvasWidth - this.MY_WIDTH - this.SHIFTX ) ) {
		this.x = this.x + this.SHIFTX;
		this.setRefPixelPosition(this.x, this.y);
		ret = false
	}
	return ret;
}

cannonSprite.prototype.getOrbital = function() {
	return this.orbital;
}

cannonSprite.prototype.draw = function() {
	this.context2D.drawImage(this.cannonImg,this.posX,this.posY);
}

