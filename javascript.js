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
    
    playerSelection = playerSelection.toLowerCase();
    console.log('playerSelection:', playerSelection);
    console.log('computerSelection:', computerSelection);
  
        if (playerSelection === computerSelection) {
            return 'You tied';
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return 'You won';
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return 'You won';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return 'You won';
        } else {
            return 'The computer wins, sadly';
        }
}
const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice(1,3);
const result = playRound(playerSelection, computerSelection);
console.log('result:', result);

//const computerSelection = getComputerChoice(1, 3);
//console.log(playRound(playerSelection, computerSelection))

// 4. Make sure the function for one round of the game picks a winner that also describes what beats what (ex: paper beats rock) This also should be case insensitive for Rock RoCK and so on work.
