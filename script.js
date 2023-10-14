// Ensure the program has fully loaded 
window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
}); 

let myScore = 0;
let computerScore = 0;
let playerChoice = null; 

function resetScores() {
    gamesPlayed = 0;
    myScore = 0;
    computerScore = 0;
}

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3 + 1)
    if (computerChoice == 1) {
        computerChoice = "Rock";
    }
    else if (computerChoice == 2) {
        computerChoice = "Paper";
    }
    else if (computerChoice == 3) {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function getPlayerChoice() {
    if (playerChoice == 1) {
        playerChoice = "Rock";
    }
    else if (playerChoice == 2) {
        playerChoice = "Paper";
    }
    else if (playerChoice == 3) {
        playerChoice = "Scissors";
    }
    return playerChoice;
}

function playRound() {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        let gameOutcome = document.querySelector('#game-outcome');
        gameOutcome.textContent = `${playerSelection} and ${computerSelection}: It's a tie!`;
    }
    else if
        (playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper") {
        myScore++;
        let gameOutcome = document.querySelector('#game-outcome');
        gameOutcome.textContent = `${playerSelection} beats ${computerSelection}. You win!`;

    }
    else if
        (playerSelection == "Rock" && computerSelection == "Paper" ||
        playerSelection == "Paper" && computerSelection == "Scissors" ||
        playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore++;
        let gameOutcome = document.querySelector('#game-outcome');
        gameOutcome.textContent = `${computerSelection} beats ${playerSelection}. You lose!`;
    }
}

function playGame() {
    playRound();
    let displayScore = document.querySelector('#score');
    displayScore.textContent = `My Score: ${myScore} Computer Score: ${computerScore}`
    if (myScore == 5) {
        let gameOutcome = document.querySelector('#game-outcome');
        gameOutcome.textContent = "You win the game!";
        let playAgain = document.querySelector('#play-again');
        playAgain.textContent = "Click Rock, Paper, or Scissors to play again!"
        resetScores();
    }
    else if (computerScore == 5) {
        let gameOutcome = document.querySelector('#game-outcome');
        gameOutcome.textContent = "You lose. Game over.";
        let playAgain = document.querySelector('#play-again');
        playAgain.textContent = "Click Rock, Paper, or Scissors to play again!"
        resetScores();
    }
    else if (myScore || computerScore < 5) {
        let playAgain = document.querySelector('#play-again');
        playAgain.textContent = ""
    }
}; 

let resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', function() {
    resetScores();
    let displayScore = document.querySelector('#score');
    displayScore.textContent = `My Score: ${myScore} Computer Score: ${computerScore}`
    let gameOutcome = document.querySelector('#game-outcome');
    gameOutcome.textContent = "";
});

let chooseRock = document.querySelector('#rock');
chooseRock.addEventListener('click', function() {
    playerChoice = 1; 
    playGame();
});

let choosePaper = document.querySelector('#paper');
choosePaper.addEventListener('click', function() {
    playerChoice = 2;
    playGame();
});

let chooseScissors = document.querySelector('#scissors');
chooseScissors.addEventListener('click', function() {
    playerChoice = 3; 
    playGame();
});
