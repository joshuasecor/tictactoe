// Keeps track of turns //
var turnCounter = 1;

// Player scores //

var plyr1 = 0;
var plyr2 = 0;

function point1() {
	plyr1++;
	document.getElementById("player1").innerHTML = plyr1;
}

function point2() {
	plyr2++;
	document.getElementById("player2").innerHTML = plyr2;
}

// Adds 1 to turnCounter, ends game after 9th turn, run AFTER checking for winner //
function nextTurn() {
	turnCounter++;
	if (turnCounter %2 == 0) {
		document.getElementById("subheader").innerHTML = "Player 2's turn...";
	}
	else {
		document.getElementById("subheader").innerHTML = "Player 1's turn...";
	};
	if (turnCounter > 9) {
		tieGame();
	}
	winLogic();
}

// Functions to end game, change <h2> text, reveal "Play Again" button //
function tieGame() {
	document.getElementById("subheader").innerHTML = "It's a tie!";
	enableButton();
}

function xWins() {
	document.getElementById("subheader").innerHTML = "Player 1 wins!";
	point1();
	enableButton();
	noClicks();
}

function oWins() {
	document.getElementById("subheader").innerHTML = "Player 2 wins!";
	point2();
	enableButton();
	noClicks();
}

// Disable to "Play Again button" - this function is run on page load (see opening <body> tag) //
function disableButton() {
	document.getElementById("replay").disabled = true;
}

// Enable the "Play Again" button //
function enableButton() {
	document.getElementById("replay").disabled = false;
}

// Restarts turn counter, clears board,  //
function playAgain() {
	turnCounter = 1;
	for (var i = 0; i < squares.length; i++) {
	squares[i].innerHTML = ""};
	disableButton();
	yesClicks();
	document.getElementById("subheader").innerHTML = "Player 1's turn...";
}

// Clickability for squares //

var squares = document.getElementsByClassName("squares");

for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function(){
		if (this.innerHTML == 0) {
			if (turnCounter %2 == 0) {
				this.innerHTML = "O";
			}
			else {
				this.innerHTML = "X";
			};
			nextTurn();
		}
	})
}


// Disable board //

function noClicks() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.pointerEvents = 'none';
	}
}

// Enable board //

function yesClicks() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.pointerEvents = 'auto';
	}
}

// Win logic //

function winLogic() {
	if
		(document.getElementById("square1").innerHTML == "X" && document.getElementById("square2").innerHTML == "X" && document.getElementById("square3").innerHTML == "X")
	{xWins()}
	else if(document.getElementById("square4").innerHTML == "X" && document.getElementById("square5").innerHTML == "X" && document.getElementById("square6").innerHTML == "X")
	{xWins()}
	else if(document.getElementById("square7").innerHTML == "X" && document.getElementById("square8").innerHTML == "X" && document.getElementById("square9").innerHTML == "X")
	{xWins()}
		else if(document.getElementById("square1").innerHTML == "X" && document.getElementById("square4").innerHTML == "X" && document.getElementById("square7").innerHTML == "X")
	{xWins()}
	else if(document.getElementById("square2").innerHTML == "X" && document.getElementById("square5").innerHTML == "X" && document.getElementById("square8").innerHTML == "X")
	{xWins()}
		else if(document.getElementById("square3").innerHTML == "X" && document.getElementById("square6").innerHTML == "X" && document.getElementById("square9").innerHTML == "X")
	{xWins()}
		else if(document.getElementById("square1").innerHTML == "X" && document.getElementById("square5").innerHTML == "X" && document.getElementById("square9").innerHTML == "X")
	{xWins()}
		else if(document.getElementById("square3").innerHTML == "X" && document.getElementById("square5").innerHTML == "X" && document.getElementById("square7").innerHTML == "X")
	{xWins()}


	else if
		(document.getElementById("square1").innerHTML == "O" && document.getElementById("square2").innerHTML == "O" && document.getElementById("square3").innerHTML == "O")
	{oWins()}
	else if(document.getElementById("square4").innerHTML == "O" && document.getElementById("square5").innerHTML == "O" && document.getElementById("square6").innerHTML == "O")
	{oWins()}
	else if(document.getElementById("square7").innerHTML == "O" && document.getElementById("square8").innerHTML == "O" && document.getElementById("square9").innerHTML == "O")
	{oWins()}
		else if(document.getElementById("square1").innerHTML == "O" && document.getElementById("square4").innerHTML == "O" && document.getElementById("square7").innerHTML == "O")
	{oWins()}
	else if(document.getElementById("square2").innerHTML == "O" && document.getElementById("square5").innerHTML == "O" && document.getElementById("square8").innerHTML == "O")
	{oWins()}
		else if(document.getElementById("square3").innerHTML == "O" && document.getElementById("square6").innerHTML == "O" && document.getElementById("square9").innerHTML == "O")
	{oWins()}
		else if(document.getElementById("square1").innerHTML == "O" && document.getElementById("square5").innerHTML == "O" && document.getElementById("square9").innerHTML == "O")
	{oWins()}
		else if(document.getElementById("square3").innerHTML == "O" && document.getElementById("square5").innerHTML == "O" && document.getElementById("square7").innerHTML == "O")
	{oWins()}	
}
