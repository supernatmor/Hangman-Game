var bigText = document.getElementById("user-Text");
var guesses= document.getElementById("guesses");

//creating array of possible words to guess
var bank = ["yoda", "deathstar", "lightsaber", "luke", "lei", "han", "chewbacca", "c3p0", "r2d2", "stormtrooper", "alderaan", "tatooine", "endor"];

//convert array to uppercase, log to verify
for (var i =0; i < bank.length;  i++) {
	bank[i] = bank[i].toUpperCase();
	//console.log( bank[i] ) ;
}

//setting the word to be guessed and console for debug
var rand = bank.length * Math.random();
var noDec = Math.floor (rand);
var guess = bank[noDec].split(""); //word to be guessed
console.log(guess);
var missed = 0;
var right = 0;

//setting number of "_" to be displayed and sending to "word" id
var gLength = guess.length;
var blanksArray = [];  //created array so can compare user input later
for (var c = 0;  c  < gLength; c++) {
	blanksArray[c]="_ ";
	//console.log(blanksArray);
}


//displays # of "_" matching length of word to be guessed
function setBlanks() {
	var blanks = blanksArray.join(" ");
	//console.log(blanks);
	bigText.textContent = blanks;
}


//set variable and tracking for user input
var letter = "";
document.onkeypress = function(event) {
letter = event.key.toUpperCase();
checkLetter();
//console.log(letter)
var letters = "";
letters = letters +  " " + event.key;
guesses.textContent + letters;

}



//compare user input to computer word, change corresponding _ on screen
function checkLetter() {
	var match = false; 
	for (var count = 0; count < gLength; count++) {
		if (letter === guess[count]) {
			//alert("you got one right");
			blanksArray[count] = letter;
			match = true;
			right++;
		}
	}
	setBlanks();
	if (match == false) {
		missed++;
	}
	//console.log (match, missed);


	//win and loss conditions
	if (missed >=5) {
	alert ("you lose");
	}
	else if ( right >= gLength) {
		alert("you win");
	}

}







