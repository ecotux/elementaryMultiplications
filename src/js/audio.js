
function audioplayer() {
	this.runningAudio = Mult.data.get("MAINAUDIO");
	this.runningAudio.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);

	this.breakAudio = Mult.data.get("BREAKSOUND");
	this.errorAudio = Mult.data.get("ERRORSOUND");
	this.okAudio = Mult.data.get("OKSOUND");

	this.check = document.getElementById('sound');
	this.check.addEventListener('click', this.change.bind(this), false);
}

audioplayer.prototype.play = function() {
	if (this.check.checked) {
	        this.runningAudio.play();
	}
}

audioplayer.prototype.stop = function() {
        this.runningAudio.pause();
        this.runningAudio.currentTime = 0;
}

audioplayer.prototype.change = function() {
	if (this.check.checked == true && Mult.gameRun == true ) {
	        this.runningAudio.play();
	} else {
	        this.runningAudio.pause();
	}
}

audioplayer.prototype.break = function() {
	if (this.check.checked) {
		this.breakAudio.play();
	}
}

audioplayer.prototype.gameOverError = function() {
	if (this.check.checked) {
		this.errorAudio.play();
	}
}

audioplayer.prototype.gameOverOK = function() {
	if (this.check.checked) {
		this.okAudio.play();
	}
}

