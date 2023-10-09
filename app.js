function game() {
	// Array containing choices for computer
	const gameChoices = ['Rock', 'Paper', 'Scissors'];

	// Variables declared and initalised
	let rounds = 1;
	let playerScore = 0;
	let computerScore = 0;

	let userChooseRounds = parseInt(
		prompt('How many rounds would you like to play?')
	);

	// While loop to loop over game rounds
	while (rounds !== userChooseRounds + 1) {
		function getComputerChoice() {
			let index = Math.floor(Math.random() * (4 - 1) + 1) - 1;
			let choice = gameChoices[index].toLowerCase();
			return choice;
		}

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

		const playerChoice = prompt(
			'Please type "Rock", "Paper" or "Scissors"'
		).toLowerCase();
		const computerChoice = getComputerChoice();

		console.log(`Round ${rounds}:`);
		console.log(`Player choice is: ${playerChoice}`);
		console.log(`Computer choice is: ${computerChoice}`);

		console.log(playRound(playerChoice, computerChoice));
		console.log(`*****************************************`);

		rounds++;
	}

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
