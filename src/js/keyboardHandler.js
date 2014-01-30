// from: http://www.slashgame.net/2011/05/user-input-make-it-easier-on-yourself.html

var keys = {};

window.addEventListener('keydown',keyPressDown,true);
window.addEventListener('keyup',keyPressUp,true);

function keyPressDown(evt){
	keys[evt.keyCode] = true;

// Disable default behaviour of spacebar
// http://stackoverflow.com/questions/940180/using-prevent-default-to-take-over-spacebar
// http://stackoverflow.com/questions/5422770/returning-false-from-click-handler-doesnt-work-in-firefox
// BUG: It doesn't work with Firefox!!
	var code;  
	if( evt.keyCode ) {
		code = evt.keyCode;
	} else if (e.which) {
		code = evt.which;
	}
	if( code == 32 ) {
		if (evt.stopPropagation) {
			evt.stopPropagation();
			evt.preventDefault();
		}
		return false;
	}
}
function keyPressUp(evt){
	keys[evt.keyCode] = false;
}

function isKeyPressed(checkKey) {

	// alphabet
	if ((checkKey == 'a' || checkKey == 'A') && (65 in keys && keys[65])){
		return true;
	}
	else if ((checkKey == 'b' || checkKey == 'B') && (66 in keys && keys[66])){
		return true;
	}
	else if ((checkKey == 'c' || checkKey == 'C') && (67 in keys && keys[67])){
		return true;
	}
	else if ((checkKey == 'd' || checkKey == 'D') && (68 in keys && keys[68])){
		return true;
	}
	else if ((checkKey == 'e' || checkKey == 'E') && (69 in keys && keys[69])){
		return true;
	}
	else if ((checkKey == 'f' || checkKey == 'F') && (70 in keys && keys[70])){
		return true;
	}
	else if ((checkKey == 'g' || checkKey == 'G') && (71 in keys && keys[71])){
		return true;
	}
	else if ((checkKey == 'h' || checkKey == 'H') && (72 in keys && keys[72])){
		return true;
	}
	else if ((checkKey == 'i' || checkKey == 'I') && (73 in keys && keys[73])){
		return true;
	}
	else if ((checkKey == 'j' || checkKey == 'J') && (74 in keys && keys[74])){
		return true;
	}
	else if ((checkKey == 'k' || checkKey == 'K') && (75 in keys && keys[75])){
		return true;
	}
	else if ((checkKey == 'l' || checkKey == 'L') && (76 in keys && keys[76])){
		return true;
	}
	else if ((checkKey == 'm' || checkKey == 'M') && (77 in keys && keys[77])){
		return true;
	}
	else if ((checkKey == 'n' || checkKey == 'N') && (78 in keys && keys[78])){
		return true;
	}
	else if ((checkKey == 'o' || checkKey == 'O') && (79 in keys && keys[79])){
		return true;
	}
	else if ((checkKey == 'p' || checkKey == 'P') && (80 in keys && keys[80])){
		return true;
	}
	else if ((checkKey == 'q' || checkKey == 'Q') && (81 in keys && keys[81])){
		return true;
	}
	else if ((checkKey == 'r' || checkKey == 'R') && (82 in keys && keys[82])){
		return true;
	}
	else if ((checkKey == 's' || checkKey == 'S') && (83 in keys && keys[83])){
		return true;
	}
	else if ((checkKey == 't' || checkKey == 'T') && (84 in keys && keys[84])){
		return true;
	}
	else if ((checkKey == 'u' || checkKey == 'U') && (85 in keys && keys[85])){
		return true;
	}
	else if ((checkKey == 'v' || checkKey == 'V') && (86 in keys && keys[86])){
		return true;
	}
	else if ((checkKey == 'w' || checkKey == 'W') && (87 in keys && keys[87])){
		return true;
	}
	else if ((checkKey == 'x' || checkKey == 'X') && (88 in keys && keys[88])){
		return true;
	}
	else if ((checkKey == 'y' || checkKey == 'Y') && (89 in keys && keys[89])){
		return true;
	}
	else if ((checkKey == 'z' || checkKey == 'Z') && (90 in keys && keys[90])){
		return true;
	}

	// numbers
	else if ((checkKey == '0') && (48 in keys && keys[48])){
		return true;
	}
	else if ((checkKey == '1') && (49 in keys && keys[49])){
		return true;
	}
	else if ((checkKey == '2') && (50 in keys && keys[50])){
		return true;
	}
	else if ((checkKey == '3') && (51 in keys && keys[51])){
		return true;
	}
	else if ((checkKey == '4') && (52 in keys && keys[52])){
		return true;
	}
	else if ((checkKey == '5') && (53 in keys && keys[53])){
		return true;
	}
	else if ((checkKey == '6') && (54 in keys && keys[54])){
		return true;
	}
	else if ((checkKey == '7') && (55 in keys && keys[55])){
		return true;
	}
	else if ((checkKey == '8') && (56 in keys && keys[56])){
		return true;
	}
	else if ((checkKey == '9') && (57 in keys && keys[57])){
		return true;
	}

	// special keys
	else if ((checkKey == 'left' || checkKey == 'LEFT') && (37 in keys && keys[37])){
		return true;
	}
	else if ((checkKey == 'right' || checkKey == 'RIGHT') && (39 in keys && keys[39])){
		return true;
	}
else 	if ((checkKey == 'up' || checkKey == 'UP') && (38 in keys && keys[38])){
		return true;
	}
	else if ((checkKey == 'down' || checkKey == 'DOWN') && (40 in keys && keys[40])){
		return true;
	}
	else if ((checkKey == 'esc' || checkKey == 'ESC' || checkKey == 'escape' || checkKey == 'ESCAPE' ) && (27 in keys && keys[27])){
		return true;
	}

	// space
	else if ((checkKey == 'space' || checkKey == 'SPACE') && (32 in keys && keys[32])){
		return true;
	}
} // end function isKeyPressed(checkKey)


function isKeyPressedTrigger(checkKey) {

	// alphabet
	if ((checkKey == 'a' || checkKey == 'A') && (65 in keys && keys[65])){
		keys[65] = false;
		return true;
	}
	else if ((checkKey == 'b' || checkKey == 'B') && (66 in keys && keys[66])){
		keys[66] = false;
		return true;
	}
	else if ((checkKey == 'c' || checkKey == 'C') && (67 in keys && keys[67])){
		keys[67] = false;
		return true;
	}
	else if ((checkKey == 'd' || checkKey == 'D') && (68 in keys && keys[68])){
		keys[68] = false;
		return true;
	}
	else if ((checkKey == 'e' || checkKey == 'E') && (69 in keys && keys[69])){
		keys[69] = false;
		return true;
	}
	else if ((checkKey == 'f' || checkKey == 'F') && (70 in keys && keys[70])){
		keys[70] = false;
		return true;
	}
	else if ((checkKey == 'g' || checkKey == 'G') && (71 in keys && keys[71])){
		keys[71] = false;
		return true;
	}
	else if ((checkKey == 'h' || checkKey == 'H') && (72 in keys && keys[72])){
		keys[72] = false;
		return true;
	}
	else if ((checkKey == 'i' || checkKey == 'I') && (73 in keys && keys[73])){
		keys[73] = false;
		return true;
	}
	else if ((checkKey == 'j' || checkKey == 'J') && (74 in keys && keys[74])){
		keys[74] = false;
		return true;
	}
	else if ((checkKey == 'k' || checkKey == 'K') && (75 in keys && keys[75])){
		keys[75] = false;
		return true;
	}
	else if ((checkKey == 'l' || checkKey == 'L') && (76 in keys && keys[76])){
		keys[76] = false;
		return true;
	}
	else if ((checkKey == 'm' || checkKey == 'M') && (77 in keys && keys[77])){
		keys[77] = false;
		return true;
	}
	else if ((checkKey == 'n' || checkKey == 'N') && (78 in keys && keys[78])){
		keys[78] = false;
		return true;
	}
	else if ((checkKey == 'o' || checkKey == 'O') && (79 in keys && keys[79])){
		keys[79] = false;
		return true;
	}
	else if ((checkKey == 'p' || checkKey == 'P') && (80 in keys && keys[80])){
		keys[80] = false;
		return true;
	}
	else if ((checkKey == 'q' || checkKey == 'Q') && (81 in keys && keys[81])){
		keys[81] = false;
		return true;
	}
	else if ((checkKey == 'r' || checkKey == 'R') && (82 in keys && keys[82])){
		keys[82] = false;
		return true;
	}
	else if ((checkKey == 's' || checkKey == 'S') && (83 in keys && keys[83])){
		keys[83] = false;
		return true;
	}
	else if ((checkKey == 't' || checkKey == 'T') && (84 in keys && keys[84])){
		keys[84] = false;
		return true;
	}
	else if ((checkKey == 'u' || checkKey == 'U') && (85 in keys && keys[85])){
		keys[85] = false;
		return true;
	}
	else if ((checkKey == 'v' || checkKey == 'V') && (86 in keys && keys[86])){
		keys[86] = false;
		return true;
	}
	else if ((checkKey == 'w' || checkKey == 'W') && (87 in keys && keys[87])){
		keys[87] = false;
		return true;
	}
	else if ((checkKey == 'x' || checkKey == 'X') && (88 in keys && keys[88])){
		keys[88] = false;
		return true;
	}
	else if ((checkKey == 'y' || checkKey == 'Y') && (89 in keys && keys[89])){
		keys[89] = false;
		return true;
	}
	else if ((checkKey == 'z' || checkKey == 'Z') && (90 in keys && keys[90])){
		keys[90] = false;
		return true;
	}

	// numbers
	else if ((checkKey == '0') && (48 in keys && keys[48])){
		keys[48] = false;
		return true;
	}
	else if ((checkKey == '1') && (49 in keys && keys[49])){
		keys[49] = false;
		return true;
	}
	else if ((checkKey == '2') && (50 in keys && keys[50])){
		keys[50] = false;
		return true;
	}
	else if ((checkKey == '3') && (51 in keys && keys[51])){
		keys[51] = false;
		return true;
	}
	else if ((checkKey == '4') && (52 in keys && keys[52])){
		keys[52] = false;
		return true;
	}
	else if ((checkKey == '5') && (53 in keys && keys[53])){
		keys[53] = false;
		return true;
	}
	else if ((checkKey == '6') && (54 in keys && keys[54])){
		keys[54] = false;
		return true;
	}
	else if ((checkKey == '7') && (55 in keys && keys[55])){
		keys[55] = false;
		return true;
	}
	else if ((checkKey == '8') && (56 in keys && keys[56])){
		keys[56] = false;
		return true;
	}
	else if ((checkKey == '9') && (57 in keys && keys[57])){
		keys[57] = false;
		return true;
	}

	// special keys
	else if ((checkKey == 'left' || checkKey == 'LEFT') && (37 in keys && keys[37])){
		keys[37] = false;
		return true;
	}
	else if ((checkKey == 'right' || checkKey == 'RIGHT') && (39 in keys && keys[39])){
		keys[39] = false;
		return true;
	}
else 	if ((checkKey == 'up' || checkKey == 'UP') && (38 in keys && keys[38])){
		keys[38] = false;
		return true;
	}
	else if ((checkKey == 'down' || checkKey == 'DOWN') && (40 in keys && keys[40])){
		keys[40] = false;
		return true;
	}
	else if ((checkKey == 'esc' || checkKey == 'ESC' || checkKey == 'escape' || checkKey == 'ESCAPE' ) && (27 in keys && keys[27])){
		keys[27] = false;
		return true;
	}

	// space
	else if ((checkKey == 'space' || checkKey == 'SPACE') && (32 in keys && keys[32])){
		keys[32] = false;
		return true;
	}
} // end function isKeyPressedTrigger(checkKey)

