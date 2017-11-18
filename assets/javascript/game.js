//  Is this file linked to the HTML Doc?  //
//console.log("test")
// Yes
// Choosing a random word
var wordArray = [
	"zoidberg", 
	"fry", 
	"professor", 
	"leela", 
	"hermes", 
	"bender", 
	"amy",
	"kif",
	"zapp",
	"scruffy"]

var word = "";

// display length of the answer to the user with "_"
var answerArray = [];


function init() {
	word = wordArray[Math.floor(Math.random()*wordArray.length)];
	for (var i = 0; i < word.length; i++) {
	answerArray[i] = "_";
	}
}
init()
// this will keep track of letters left to be guessed
var remainingLetters = word.length;
var targetDiv = document.getElementById("hangmanWord");

      var newDiv = document.createElement("div");
      newDiv.innerHTML = answerArray.join(" ");
      targetDiv.appendChild(newDiv);

var userText = document.getElementById("userGuess");
      document.onkeyup = function(event) {
        userText.textContent = event.key;
      };

var i = 0
for (var i = 0; i < word.length; i++) {
		if (word[i] === userText) {
			answerArray[i] = userText;
		} else {
			answerArray[i] = answerArray[i];
		};

}


    console.log(word)
    console.log(answerArray[i])

         

/* # generate a word at random and store it in a variable
# display the length of the word to the user
# correct_guesses is less than the length of the word
# prompt the user to guess a letter
# if the guess is correct increment correct_guesses by 1
# if the guess is incorrect increment incorrect_guesses by 1 
# and draw the next part of the hangman
# if the incorrect_guesses is greater than 8, tell the user 
# they lost and exit the program
# if correct_guesses is equal to the length of the word, tell the user they won */


