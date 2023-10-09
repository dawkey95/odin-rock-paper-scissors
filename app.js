function game() {
	// Array containing choices for computer
	const gameChoices = ['Rock', 'Paper', 'Scissors'];

	// Variables declared and initalised
	let rounds = 1;
	let playerScore = 0;
	let computerScore = 0;

	// player prompt to choose amount of rounds to be played
	let playerChooseRounds = parseInt(
		prompt('How many rounds would you like to play?')
	);

	// While loop to loop over game rounds set by player
	while (rounds !== playerChooseRounds + 1) {
		// Computer choice by getting random number and using that number as the index
		// on the array gameChoices.
		function getComputerChoice() {
			let index = Math.floor(Math.random() * (4 - 1) + 1) - 1;
			let choice = gameChoices[index].toLowerCase();
			return choice;
		}

		// Single round taking a playerChoice and computerChoice and then checking the conditions to win, lose or tie the round
		// Whoever won the round get their score incremented
		function playRound(playerChoice, computerChoice) {
			if (playerChoice === 'rock' && computerChoice === 'scissors') {
				playerScore += 1;
				return 'You Won! Rock beats scissors';
			} else if (playerChoice === 'rock' && computerChoice === 'paper') {
				computerScore += 1;
				return 'You Lost! Paper beats rock';
			} else if (playerChoice === 'paper' && computerChoice === 'scissors') {
				computerScore += 1;
				return 'You Lost! Scissors beats paper';
			} else if (playerChoice === 'paper' && computerChoice === 'rock') {
				playerScore += 1;
				return 'You Won! Paper beats rock';
			} else if (playerChoice === 'scissors' && computerChoice === 'rock') {
				computerScore += 1;
				return 'You Lost! Rock beats scissors';
			} else if (playerChoice === 'scissors' && computerChoice === 'paper') {
				playerScore += 1;
				return 'You Won! Scissors beats paper';
			} else {
				return 'You tied';
			}
		}

		// Players choice input which is made lowercase to avoid case-sensitivity
		const playerChoice = prompt(
			'Please type "Rock", "Paper" or "Scissors"'
		).toLowerCase();

		// computerChoice function is called
		const computerChoice = getComputerChoice();

		// Per round update
		console.log(`Round ${rounds}:`);
		console.log(`Player choice is: ${playerChoice}`);
		console.log(`Computer choice is: ${computerChoice}`);
		console.log(playRound(playerChoice, computerChoice));
		console.log(`*****************************************`);

		rounds++;
	}

	// Conditions are checked after the rounds are played with highest score winning the game
	if (playerScore > computerScore) {
		alert(
			`You Won! You got ${playerScore} points and computer got ${computerScore} points.`
		);
	} else if (computerScore > playerScore) {
		alert(
			`You Lost! You got ${playerScore} points and computer got ${computerScore} points.`
		);
	} else {
		alert('Game Tied!');
	}
}

game();
