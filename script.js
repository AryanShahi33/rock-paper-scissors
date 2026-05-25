// Use a random number generator to make the computer pick between rock paper or scissors
// create the function
function getComputerChoice(){
    let random = Math.floor(Math.random()*3);
    let computerChoice = "";
    if (random == 0){
        computerChoice = "Rock";
    }
    else if (random == 1){
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}
//create a variable to store the random number
let computer = getComputerChoice();


