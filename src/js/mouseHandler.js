// http://www.chestysoft.com/imagefile/javascript/get-coordinates.asp
function FindPosition(oElement)
{
	if(typeof( oElement.offsetParent ) != "undefined") {
		for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent) {
			posX += oElement.offsetLeft;
			posY += oElement.offsetTop;
		}
		return [ posX, posY ];
    	}
	else {
		return [ oElement.x, oElement.y ];
	}
}

/// Control Left

function mouseControl1(canvas) {
	this.canvas = canvas;
	this.context2D = canvas.getContext('2d');

	// http://jbkflex.wordpress.com/2012/07/12/javascript-touch-event-or-mouse-event-detect-and-handle-according-to-device/
	var isTouchSupported = 'ontouchstart' in window;
	var startEvent = isTouchSupported ? 'touchstart' : 'mousedown';
	var endEvent = isTouchSupported ? 'touchend' : 'mouseup';

	this.canvas.addEventListener(startEvent,this.clickEvent.bind(this),false);
	this.canvas.addEventListener(endEvent,this.releaseEvent.bind(this),false);
	this.mouseClick = false;
	this.ImgPos=FindPosition(this.canvas);
}

mouseControl1.prototype.clickEvent = function(evt) {
	evt.stopPropagation();
	evt.preventDefault();
        this.mouseClick = true;
        this.mouseX = evt.pageX - this.canvas.offsetLeft - this.ImgPos[0];
        this.mouseY = evt.pageY - this.canvas.offsetTop - this.ImgPos[1];
}

mouseControl1.prototype.releaseEvent = function(evt) {
	evt.stopPropagation();
	evt.preventDefault();
        this.mouseClick = false;
}

mouseControl1.prototype.Trigger = function(key) {
	if(this.mouseClick == true) {
		if(key=='DOWN') {
			if(this.mouseY > (this.canvas.height/2)) {
				return true
			}
		}
		if(key=='UP') {
			if(this.mouseY <= (this.canvas.height/2)) {
				return true
			}
		}
	}
	return false;
}


/// Control Right

function mouseControl2(canvas) {
	this.canvas = canvas;
	this.context2D = canvas.getContext('2d');

	this.canvas.addEventListener('click',this.clickEvent.bind(this),false);
	this.mouseClick = false;
}

mouseControl2.prototype.clickEvent = function(evt) {
        this.mouseClick = true;
}

mouseControl2.prototype.Trigger = function(key) {
	if(this.mouseClick == true) {
		if(key=='FIRE') {
			this.mouseClick = false;
			return true
		}
	}
	this.mouseClick = false;
	return false;
}

