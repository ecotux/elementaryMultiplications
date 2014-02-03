
// define Global Variables via Namespaces
// http://stackoverflow.com/questions/9085839/surprised-that-global-variable-has-undefined-value-in-javascript
// http://stackoverflow.com/questions/407048/accessing-variables-from-other-functions-without-using-global-variables
// http://stackoverflow.com/questions/4862193/javascript-global-variables

// Using "window.onload" for variable initialization is mandatory,
// otherwise "document" is undefined!
window.onload = loadgame;
window.Mult = {};

function loadgame() {
	Mult.gameRun = true;
	document.getElementById('startButton').disabled = Mult.gameRun;

	Mult.dataLoad = false;
	Mult.data = new preloadData(afterLoad);
	Mult.data.preload();
}

function afterLoad() {
	Mult.FPS = 60;
	Mult.audio = new audioplayer();
	Mult.mouseCtr1 = new mouseControl1(document.getElementById('controlCanvas'));
	Mult.mouseCtr2 = new mouseControl2(document.getElementById('fireCanvas'));
	Mult.game = new multGame(document.getElementById('gameCanvas'));

	Mult.gameRun = false;
	document.getElementById('startButton').disabled = Mult.gameRun;

	startPage(document.getElementById('gameCanvas'));
}

function startPage(canvas) {
	context2D = canvas.getContext('2d');
	context2D.fillStyle = "rgb(250,250,250)";
	context2D.font = "24px Helvetica";
	context2D.textAlign = "center";
	context2D.textBaseline = "bottom";
	context2D.fillText("Start the game!", canvas.width/2, canvas.height/2 );
}

function startgame() {
	Mult.game.run();
}

