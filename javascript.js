// 1. Write a function that randomly selects between 1, 2, and 3
function getComputerChoice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    Math.floor(Math.random() * (max - min + 1) + min);
// 2. Write an if statement that combines with the function to then select either 'rock', 'paper', or 'scissors'
    if (Math.floor(Math.random() * (max - min + 1) + min) == 1) {
        return 'rock';
    } else if (Math.floor(Math.random() * (max - min + 1) + min) == 2) {
        return 'paper';
    } else (Math.floor(Math.random() * (max - min + 1) + min) == 3) 
        return 'scissors';
}
console.log( getComputerChoice(1, 3) );

// 3. Write another function that plays only one round of rock paper scissors
// 4. Make sure the function for one round of the game picks a winner that also
// describes what beats what (ex: paper beats rock) This also should be case insensitive for Rock RoCK and so on work.
