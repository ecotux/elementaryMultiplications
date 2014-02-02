
function multGame(canvas) {
	this.canvas = canvas;
	this.context2D = this.canvas.getContext('2d');

	// size of FirefoxOS device
//	this.canvas.height = 480;
	this.canvas.height = 240;
	this.canvas.width = 320;

	// Exercise Text
	this.exercise = new textExercise(this.canvas,0,0);
	this.numTarget = 0;

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

	this.flush();
	Mult.gameRun = false;
}

multGame.prototype.flush = function() {

	// Input Commands
	this.cmd = null;

	// Bullet Count
	this.totalBullet = 0;
	// ticks with no bullets
	this.noBullet = 0;

	// new exercise
	var n1 = Math.floor(Math.random()*7)+2;
	var n2 = Math.floor(Math.random()*7)+2;
	this.exercise = new textExercise(this.canvas,n1,n2);
	this.numTarget = n1*n2;

	for( var i = 0; i < this.orbitalList.length; i++) {
		this.orbitalList[i].flush();
	}
}

multGame.prototype.run = function() {
	Mult.gameRun = true;
	document.getElementById('startButton').disabled = Mult.gameRun;

	Mult.audio.play();
	// Main Loop
	// Note: "this" in "setInterval" is "window" by default!
	// http://stackoverflow.com/questions/15498508/unable-to-access-the-object-using-this-this-points-to-window-object
	this.running = setInterval(this.runGameLoop.bind(this),1000/Mult.FPS);
}

multGame.prototype.runGameLoop = function() {
	this.handleInput();
	var retTick = this.tick();

	// render
	if( retTick == 0 ) {
		this.draw();
	}
	if( retTick == -1 ) {
		Mult.gameRun = false;
		document.getElementById('startButton').disabled = Mult.gameRun;

		this.gameOverError();
		Mult.audio.stop();
		Mult.audio.gameOverError();
		clearInterval(this.running);
		this.flush();
	}
	if( retTick == 1 ) {
		Mult.gameRun = false;
		document.getElementById('startButton').disabled = Mult.gameRun;

		this.gameOverOK();
		Mult.audio.stop();
		Mult.audio.gameOverOK();
		clearInterval(this.running);
		this.flush();
	}
}

// For Input Handling I use global function/objects
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
	if( Mult.mouseCtr1.Trigger('DOWN') == true ) {
		this.cmd = "DOWN";
	}
	if( Mult.mouseCtr1.Trigger('UP') == true ) {
		this.cmd = "UP";
	}
	if( Mult.mouseCtr2.Trigger('FIRE') == true ) {
		this.cmd = "FIRE";
	}
}

multGame.prototype.tick = function() {
	// SPEED = get a bullet every 2.5 seconds (in average)
	// SPEED = max 2 seconds without any bullet
	var rnd = Math.floor(Math.random()*2.5*Mult.FPS);
	this.noBullet++;
	if( this.noBullet % (2*Mult.FPS) == 0 ) {
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

