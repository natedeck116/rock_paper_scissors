// 1. Write a function that randomly selects between 1, 2, and 3
function getComputerChoice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const num = Math.floor(Math.random() * (max - min + 1) + min);
// 2. Write an if statement that combines with the function to then select either 'rock', 'paper', or 'scissors'
    if (num == 1) {
        return 'rock';
    } else if (num == 2) {
        return 'paper';
    } else (num == 3)
        return 'scissors';
}
console.log(getComputerChoice(1,3));

// 3. Write function that plays one round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  
        if (playerSelection === computerSelection) {
            return ('You foos tied');
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return ('You won boiiii!!!!');
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return ('You won boiiii!!!!');
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return ('You won boiiii!!!!');
        } else {
            return ('The computer wins, sadly :(');
        }

}
const playerSelection = 'rock';
const computerSelection = getComputerChoice(1, 3);
console.log(playRound(playerSelection, computerSelection));
//console.log(playRound());
// 4. Make sure the function for one round of the game picks a winner that also describes what beats what (ex: paper beats rock) This also should be case insensitive for Rock RoCK and so on work.
