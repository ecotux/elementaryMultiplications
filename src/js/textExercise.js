
function textExercise(canvas, n1, n2) {
	this.canvas = canvas;
	this.context2D = canvas.getContext('2d');

	this.canvasWidth = canvas.width;
	this.canvasHeight = canvas.height;

	this.stringTarget = n1.toString() + " x " + n2.toString() + " ";
}

textExercise.prototype.draw = function() {
	this.context2D.fillStyle = "rgb(0,0,0)";
	this.context2D.font = "1.5em Helvetica";
	this.context2D.textAlign = "right";
	this.context2D.textBaseline = "bottom";

	this.context2D.fillText(this.stringTarget, this.canvasWidth, this.canvasHeight);
}

