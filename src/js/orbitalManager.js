
const BULLET_START = 300;

function orbitalManager(canvas, posY) {
	this.arrow = new Array();
	this.bullet = new Array();
	this.collList = new Array();

	this.yPos = posY;
	this.canvas = canvas;
	this.context2D = canvas.getContext('2d');
	this.canvasWidth = canvas.width;
	this.canvasHeight = canvas.height;
}

orbitalManager.prototype.addArrow = function(arrow_width) {
	this.arrow.push(new arrowSprite( this.canvas, arrow_width, this.yPos ));
}

orbitalManager.prototype.addBullet = function(randNum) {
	if(this.bullet.length == 0) {
		this.bullet.push(new bulletSprite(this.canvas, BULLET_START, this.yPos, randNum));
	} else {
		var lastBullet = this.bullet[this.bullet.length - 1];
		if( lastBullet.x <= BULLET_START - lastBullet.MY_WIDTH ) {
			this.bullet.push(new bulletSprite(this.canvas, BULLET_START, this.yPos, randNum));
		}
	}
}

orbitalManager.prototype.addCollision = function(clX) {
	this.collList.push(new collAnimation( this.canvas, clX, this.yPos ));
}

orbitalManager.prototype.tick = function() {

	var passed = 0;
	var broken = 0;

	var remove = false;
	var ret;
	for(var i = 0; i < this.arrow.length; i++) {
		ret = this.arrow[i].tick();
		if( ret == true ) {
			remove = true;
		}
	}
	if( remove == true ) {
		this.arrow.shift()
	}

	remove = false;
	for(var i = 0; i < this.bullet.length; i++) {
		ret = this.bullet[i].tick();
		if( ret == true ) {
			remove = true;
			passed = this.bullet[i].getNum();
		}
	}
	if( remove == true ) {
		this.bullet.shift()
	}

	if( this.arrow.length > 0 && this.bullet.length > 0 ) {
		var clX = 0;
		var firstArrow = this.arrow[0];
		var firstBullet = this.bullet[0];
		if( firstBullet.x <= firstArrow.x ) {
			clX = firstBullet.x;
			broken = firstBullet.getNum();
			this.arrow.shift()
			this.bullet.shift()
			this.addCollision(firstBullet.x);
			if (document.getElementById('sound').checked) {
				(new Audio("audio/break.wav")).play();
			}
		}
	}

	var remove = false;
	var ret;
	for(var i = 0; i < this.collList.length; i++) {
		ret = this.collList[i].tick();
		if( ret == true ) {
			remove = true;
		}
	}
	if( remove == true ) {
		this.collList.shift()
	}

	return [passed,broken];
}

orbitalManager.prototype.getY = function() {
	return this.yPos;
}

orbitalManager.prototype.draw = function() {
	for(var i = 0; i < this.arrow.length; i++) {
		this.arrow[i].draw();
	}
	for(var i = 0; i < this.bullet.length; i++) {
		this.bullet[i].draw();
	}
	for(var i = 0; i < this.collList.length; i++) {
		this.collList[i].draw();
	}
}

