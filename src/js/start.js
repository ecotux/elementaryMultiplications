
// window.onload = startgame;


function startgame () {
	var ctrlCanvas = document.getElementById('controlCanvas');
	var mouseCtr1 = new mouseControl1(ctrlCanvas);

	var fireCanvas = document.getElementById('fireCanvas');
	var mouseCtr2 = new mouseControl2(fireCanvas);

	var canvas = document.getElementById('gameCanvas');
	var game = new multGame(canvas,mouseCtr1,mouseCtr2,20);
}

