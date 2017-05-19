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
		};	

	computerGuess();

	var restart = function(){
			numGuesses = 0;
			guessesLeft = 10;
			// computerGuess();
			console.log("Computer Guess: " + computerGuess);
			console.log("Number of Guesses: " + numGuesses);
			console.log("Guesses left: " +guessesLeft);
		};

	document.onkeyup = function(event) {
		
		// if (userGuess === computerGuess) {
		// 	var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];		
		// 	console.log(computerGuess);
		// 	userGuess = event.key;
		// 	console.log(userGuess);	
		// }	
		var guessed = [];
		var userGuess = event.key;
		console.log("Your Guess: " + userGuess);
		// for ( var i = 0; guessesLeft > 0; i++) {
		// 	var userGuess = event.key;
		// 	console.log(userGuess);

			

							
		if (userGuess === computerGuess){
			wins += 1;	
			console.log("Wins: " + wins);
			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
			restart();
		} else if (guessesLeft > 0) {
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

          // Injecting the HTML we just created into our div and updating the game information on our page.
          document.querySelector("#game").innerHTML = html;
	};

					
	
})

	

