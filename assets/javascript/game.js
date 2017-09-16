var bank = ["yoda", "luke", "lei", "han", "chewbacca", "lightsaber", "stormtrooper", "deathstar", "tattooine", "alderaan"];
var guessBox = document.getElementById("word");
var letterBox = document.getElementById("guesses");
var winBox = document.getElementById("wins");
var lossBox = document.getElementById("losses");
var blanksArray, rand, noDec, guess, missed, right, match, noPrev, letter, guessed;
var wins = 0;
var losses = 0;



function reset () {
	rand = bank.length * Math.random();
	noDec = Math.floor (rand);
	guess = bank[noDec].split(""); //word to be guessed
	missed = 0;
	right = 0;
	match = false;
	noPrev = true;  
	letter = "";
	guessed = "";
	blanksArray = [];
	for (var i = 0; i < guess.length; i++){
	blanksArray[i] = "_";
	}
	setBlanks();
	winBox.textContent = wins;
	lossBox.textContent = losses; 
	
}

function setBlanks() {
	var blanks = blanksArray.join(" ");
	guessBox.textContent = blanks;
}


reset();


function prevCheck() {
	for (var i = 0; i < guessed.length; i++) {
		if (letter === guessed[i]) {
			noPrev = false; 
				
		}
	}
}

function check() {
	match = false;
	for (var i = 0; i < guess.length; i ++) {
		if (letter === guess[i]) {
				blanksArray[i] = letter;
				match = true; 
				right ++
		}
	}
	setBlanks();
	if (match == false) {
		missed ++; 
	}

	if (missed >=5) {
		alert("you lose");
		losses++;
		reset();
	}
	else if (right == guess.length) {
		alert("You Win!!");
		wins++;
		reset();
	}

	
}

document.onkeypress = function(event) {
	letter = event.key.toLowerCase();
	prevCheck();
	if (noPrev == true) {
		check();
		guessed += letter;
		letterBox.textContent = guessed;
	}
	else {
		alert("you have already guessed that letter")
		noPrev= true;
	}
	
}