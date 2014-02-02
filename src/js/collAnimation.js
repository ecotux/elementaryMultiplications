

function collAnimation(canvas, posX, posY, FPS) {
	this.canvas = canvas;
	this.context2D = canvas.getContext('2d');

	this.canvasWidth = canvas.width;
	this.canvasHeight = canvas.height;

	this.collisionImg = new Image();
	this.collisionImg.src = "images/collision.png";
	this.MY_WIDTH = 15;
	this.MY_HEIGHT = 15;
	this.LEN_ANIM = 5;
	this.referencePixelX = this.MY_WIDTH/2;
	this.referencePixelY = this.MY_HEIGHT/2;

	// SPEED = animation in 1 sec
	this.ticksPerFrame = FPS/this.LEN_ANIM;

	this.x = posX;
	this.y = posY;
	this.setRefPixelPosition(this.x,this.y);

	this.count = -1;
	this.speedControl = -1;
}

collAnimation.prototype.setRefPixelPosition = function(x, y) {
	this.posX = x - this.referencePixelX;
	this.posY = y - this.referencePixelY;
}

collAnimation.prototype.tick = function() {
	var ret = false;
	this.speedControl++;
	if( this.speedControl % this.ticksPerFrame == 0 ) {
		this.count++;
		if( this.count > this.LEN_ANIM ) {
			ret = true;
		}
	}
	return ret;
}

collAnimation.prototype.draw = function() {
	if( this.count <= this.LEN_ANIM ) {
		this.context2D.drawImage(this.collisionImg,this.count*this.MY_WIDTH,0,this.MY_WIDTH,this.MY_HEIGHT,this.posX,this.posY,this.MY_WIDTH,this.MY_HEIGHT);
	}
}

