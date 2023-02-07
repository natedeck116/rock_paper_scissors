// 1. Write a function that randomly selects 'Rock', 'Paper', or 'Scissors' 
function getComputerChoice(min, max) {
    //Need a function that picks between 1,2, and 3
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}
console.log( getComputerChoice(1, 3) );
// 2. Write another function that plays only one round of rock paper scissors
// 3. Make sure the function for one round of the game picks a winner that also
// describes what beats what (ex: paper beats rock) This also should be case insensitive for Rock RoCK and so on work.
