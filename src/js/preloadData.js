
// see also:
// http://www.javascriptkit.com/javatutors/preloadimagesplus.shtml

function preloadData(afterLoad) {
	this.afterLoad = afterLoad;
	this.loadedData = 0;
        this.data = {};
}

preloadData.prototype.preload = function() {
	this.get("ARROW");
	this.get("CANNON");
	this.get("COLLISION");
	this.get("MAINAUDIO");
	this.get("BREAKSOUND");
	this.get("ERRORSOUND");
	this.get("OKSOUND");
}

preloadData.prototype.addCounter = function() {
	this.loadedData++;
	if(this.loadedData==7) {
		this.afterLoad();
	}
}

preloadData.prototype.get = function(element) {
	if(element == "ARROW") {
		if(!this.data.arrow) {
			this.data.arrow = new Image();
			this.data.arrow.src = "images/freccia.png";
			this.data.arrow.onload = this.addCounter();
		}
		return this.data.arrow;
	}
	if(element == "CANNON") {
		if(!this.data.cannon) {
			this.data.cannon = new Image();
			this.data.cannon.src = "images/arciere.png";
			this.data.cannon.onload = this.addCounter();
		}
		return this.data.cannon;
	}
	if(element == "COLLISION") {
		if(!this.data.collision) {
			this.data.collision = new Image();
			this.data.collision.src = "images/collision.png";
			this.data.collision.onload = this.addCounter();
		}
		return this.data.collision;
	}
	if(element == "MAINAUDIO") {
		if(!this.data.mainaudio) {
			this.data.mainaudio = new Audio();
			this.data.mainaudio.addEventListener('canplaythrough',this.addCounter.bind(this),false);
			this.data.mainaudio.src = "audio/versus-1.ogg";
		}
		return this.data.mainaudio;
	}
	if(element == "BREAKSOUND") {
		if(!this.data.breaksound) {
			this.data.breaksound = new Audio();
			this.data.breaksound.addEventListener('canplaythrough',this.addCounter.bind(this),false);
			this.data.breaksound.src = "audio/break.wav";
		}
		return this.data.breaksound;
	}
	if(element == "ERRORSOUND") {
		if(!this.data.errorsound) {
			this.data.errorsound = new Audio();
			this.data.errorsound.addEventListener('canplaythrough',this.addCounter.bind(this),false);
			this.data.errorsound.src = "audio/gameover.wav";
		}
		return this.data.errorsound;
	}
	if(element == "OKSOUND") {
		if(!this.data.oksound) {
			this.data.oksound = new Audio();
			this.data.oksound.addEventListener('canplaythrough',this.addCounter.bind(this),false);
			this.data.oksound.src = "audio/death.wav";
		}
		return this.data.oksound;
	}
}

