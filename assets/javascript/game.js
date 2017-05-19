$(document).ready(function() {
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
	        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
	        't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var wins = 0;
	var losses = 0;
	var guessesLeft = 10;
	var numGuesses = 0;
	
	
	
	var computerGuess = function() {
			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];	
			console.log("Computer Guess: " + computerGuess);
		};	//end computerGuess function

	computerGuess(); //call computerGuess

	var restart = function(){
			numGuesses = 0;
			guessesLeft = 10;
			// computerGuess(); //tried calling computerGuess here but it says it's not defined???
			console.log("Computer Guess: " + computerGuess);
			console.log("Number of Guesses: " + numGuesses);
			console.log("Guesses left: " +guessesLeft);
		};

	document.onkeyup = function(event) {
		
		
		var userGuess = event.key;
		console.log("Your Guess: " + userGuess);
		// for ( var i = 0; guessesLeft > 0; i++) {
		// 	var userGuess = event.key;// previous logic I commented out
		// 	console.log(userGuess);
		var wrongLetters = [];
			

							
		if (userGuess === computerGuess){
			wins += 1;	
			console.log("Wins: " + wins);
			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
			restart();
		} else if  ((userGuess!== computerGuess) && (guessesLeft > 0)) {
			// $("#guessesLetters").prepend("<br><hr>" + wrongLetters);
			wrongLetters.push(userGuess);
			numGuesses += 1;
			guessesLeft -= 1;
			// alert("Try Again");
			console.log("Number of Guesses: " + numGuesses);
			console.log("Guesses left: " +guessesLeft);
		} else {	
			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
			losses++;
			restart();
		}


		 var html = "<p>Press any key to start playing!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Number of Guesses: " + numGuesses + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>";          


		 document.getElementById('guessedLetters').innerHTML = wrongLetters;
          // Injecting the HTML we just created into our div and updating the game information on our page.
          document.querySelector("#game").innerHTML = html;
	};

					
	
})

	

