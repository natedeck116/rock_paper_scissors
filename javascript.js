let playerScore = 0;
let computerScore = 0;
let playerSelection = null;
let computerSelection = null;

// 1. Write a function that randomly selects between 1, 2, and 3
function getComputerChoice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const num = Math.floor(Math.random() * (max - min + 1) + min);

    if (num === 1) {
      return 'rock';
    } else if (num === 2) {
      return 'paper';
    } else if (num === 3) {
      return 'scissors';
    }
  }
  
// 2. Get the player selection using a prompt
function getPlayerSelection() {

    let selection = '';
    while (selection !== 'rock' && selection !== 'paper' && selection !== 'scissors') {
        selection = prompt('rock, paper, or scissors?');
        selection = selection.toLowerCase();
    }

        return selection;

}

// 3. Write function that plays one round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    //console.log('playerSelection:', playerSelection);
   // console.log('computerSelection:', computerSelection);
    
        if (playerSelection === computerSelection) {
            return 'You tied';
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore += 1;
            return 'You won';
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore += 1;
            return 'You won';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore += 1;
            return 'You won';
        } else {
            computerScore += 1;
            return 'The computer wins, sadly';
        }
}

// 4. Play 5 rounds of rock paper scissors
//stop the game once 5 rounds has been played and declare whoever has the most points as the winner

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerSelection();
        let computerSelection = getComputerChoice(1,3);
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerSelection, computerSelection);
    console.log(playerScore, computerScore);
    }
    if (playerScore > computerScore) {
        return "You win the game!";
    } else if (computerScore > playerScore) {
        return "Computer wins, try again next time";
    }

    return (playerScore, computerScore);
}

game()
