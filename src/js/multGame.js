
function multGame(canvas,FPS) {
	this.canvas = canvas;
	this.context2D = this.canvas.getContext('2d');

	// size of FirefoxOS device
//	this.canvas.height = 480;
	this.canvas.height = 240;
	this.canvas.width = 320;

	// speed
	this.FPS = FPS;

	// Exercise Text
	var n1 = Math.floor(Math.random()*7)+2;
	var n2 = Math.floor(Math.random()*7)+2;
	this.exercise = new textExercise(this.canvas,n1,n2);
	this.numTarget = n1*n2;

	// Cannon
	this.cannon = new cannonSprite(this.canvas);

	// Orbitals
	this.orbitalList = new Array();
	var size_orbital = ( this.canvas.height - this.cannon.MY_HEIGHT ) / this.cannon.SHIFTY;
	var movey = ARROW_HEIGHT;
	for( var i = 0; i < size_orbital; i++) {
		this.orbitalList.push(new orbitalManager(this.canvas,movey));
		movey = movey + this.cannon.SHIFTY;
	}

	// Keyboard Input
	this.cmd = null;
	// Bullet Count
	this.totalBullet = 0;
	// ticks with no bullets
	this.noBullet = 0;

	this.audioSetting();
	// Main Loop
	// Note: "this" in "setInterval" is "window" by default!
	// http://stackoverflow.com/questions/15498508/unable-to-access-the-object-using-this-this-points-to-window-object
	this.running = setInterval(this.runGameLoop.bind(this),1000/this.FPS);
}

multGame.prototype.runGameLoop = function() {
	this.handleInput();
	var retTick = this.tick();
	if( retTick == 0 ) {
		this.draw();
	}
	if( retTick == -1 ) {
		this.gameOverError();
		this.runningAudio.pause();
		if (document.getElementById('sound').checked) {
			(new Audio("audio/gameover.wav")).play();
		}
		clearInterval(this.running);
	}
	if( retTick == 1 ) {
		this.gameOverOK();
		this.runningAudio.pause();
		if (document.getElementById('sound').checked) {
			(new Audio("audio/death.wav")).play();
		}
		clearInterval(this.running);
	}
}

multGame.prototype.audioSetting = function() {
	this.runningAudio = new Audio("audio/versus-1.ogg");
	this.runningAudio.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);
	this.runningAudio.play();
	this.isAudioRunning = true;
}

multGame.prototype.handleInput = function() {
	this.cmd = "nokey";
	if( isKeyPressedTrigger('UP') == true ) {
		this.cmd = "UP";
	}
	if( isKeyPressedTrigger('DOWN') == true ) {
		this.cmd = "DOWN";
	}
	if( isKeyPressedTrigger('RIGHT') == true ) {
		this.cmd = "FIRE";
	}
}

multGame.prototype.tick = function() {
	// SPEED = get a bullet every 2.5 seconds (in average)
	// SPEED = max 2 seconds without any bullet
	var rnd = Math.floor(Math.random()*2.5*this.FPS);
	this.noBullet++;
	if( this.noBullet % (2*this.FPS) == 0 ) {
		rnd = 0;
	}
	if( rnd == 0 ) {
		this.noBullet = 0;
		this.totalBullet++;
		var rndOrbital = Math.floor((Math.random()*this.orbitalList.length));
		var rndNum = Math.floor(Math.random()*15)-7+this.numTarget;
	// SPEED = max 15 bullet without the target number
	if( rndNum <= 0 || rndNum >= 100 || this.totalBullet == 15 ) {
			rndNum = this.numTarget;
		}
		this.orbitalList[rndOrbital].addBullet(rndNum);
	}

	this.cannon.tick(this.cmd);
	if( this.cmd == "FIRE" ) {
		this.orbitalList[this.cannon.getOrbital()].addArrow(ARROW_WIDTH);
	}

	var retTick = 0;
	var ret = [0,0];
	var passed = 0;
	var broken = 0;
	for( var i = 0; i < this.orbitalList.length; i++ ) {
		ret = this.orbitalList[i].tick();
		passed = ret[0];
		broken = ret[1];
		if( ( passed != 0 && passed != this.numTarget ) || broken == this.numTarget ) {
    			retTick = -1;
		}
    		if( passed == this.numTarget ) {
    			retTick = 1;
		}
	}

	// check audio
	if (document.getElementById('sound').checked && this.isAudioRunning == false) {
		this.runningAudio.play();
		this.isAudioRunning = true;
	}
	if (!document.getElementById('sound').checked && this.isAudioRunning == true) {
		this.runningAudio.pause();
		this.isAudioRunning = false;
	}

	return retTick;
}

multGame.prototype.draw = function() {
	this.context2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
	this.exercise.draw();
	this.cannon.draw();
	for( var i = 0; i < this.orbitalList.length; i++) {
		this.orbitalList[i].draw();
	}
}

multGame.prototype.gameOverOK = function() {
	this.context2D.fillStyle = "#00FF00";
	this.context2D.fillRect(0, 0, this.canvas.width, this.canvas.height);

	this.exercise.draw();
	this.cannon.draw();
	for( var i = 0; i < this.orbitalList.length; i++) {
		this.orbitalList[i].draw();
	}

        this.context2D.fillStyle = "rgb(250,250,250)";
	this.context2D.font = "24px Helvetica";
        this.context2D.textAlign = "center";
        this.context2D.textBaseline = "bottom";
	this.context2D.fillText("Game Over", this.canvas.width/2, this.canvas.height/2 );
}

multGame.prototype.gameOverError = function() {
	this.context2D.fillStyle = "#FF0000";
	this.context2D.fillRect(0, 0, this.canvas.width, this.canvas.height);

	this.exercise.draw();
	this.cannon.draw();
	for( var i = 0; i < this.orbitalList.length; i++) {
		this.orbitalList[i].draw();
	}

        this.context2D.fillStyle = "rgb(250,250,250)";
	this.context2D.font = "24px Helvetica";
        this.context2D.textAlign = "center";
        this.context2D.textBaseline = "bottom";
	this.context2D.fillText("Game Over", this.canvas.width/2, this.canvas.height/2 );
}

