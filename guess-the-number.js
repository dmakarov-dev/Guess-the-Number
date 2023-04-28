<!DOCTYPE html>
<html>
<head>
	<title>Guess the Number</title>
</head>
<body>
	<h1>Guess the Number</h1>
	<p>Guess a number between 1 and 100:</p>
	<input type="text" id="guess">
	<button onclick="checkGuess()">Submit</button>
	<p id="result"></p>

	<script>
		var answer = Math.floor(Math.random() * 100) + 1;
		var attempts = 5;

		function checkGuess() {
			var guess = parseInt(document.getElementById("guess").value);
			if (isNaN(guess) || guess < 1 || guess > 100) {
				document.getElementById("result").innerHTML = "Please enter a valid number between 1 and 100.";
			} else {
				attempts--;
				if (guess == answer) {
					document.getElementById("result").innerHTML = "Congratulations, you guessed the number!";
				} else if (guess < answer) {
					document.getElementById("result").innerHTML = "Too low! You have " + attempts + " attempts left.";
				} else {
					document.getElementById("result").innerHTML = "Too high! You have " + attempts + " attempts left.";
				}
				if (attempts == 0) {
					document.getElementById("result").innerHTML = "Game over. The number was " + answer + ".";
					document.getElementById("guess").disabled = true;
				}
			}
		}
	</script>
</body>
</html>
