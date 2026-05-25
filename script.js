// Use a random number generator to make the computer pick between rock paper or scissors
// create the function
function getComputerChoice(){
    //create a variable to store the random number
    let random = Math.floor(Math.random()*3);
    let computerChoice = "";
    if (random == 0){
        computerChoice = "rock";
    }
    else if (random == 1){
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}
//create a function to get input from user for rock paper or scissors
function getHumanChoice(){
    //ask user for input
    let userChoice = prompt("Choose between rock paper and scissors");
    //convert user input to uppercase to avoid any issues
    let uppercase = userChoice.toLowerCase();
    userChoice = uppercase;
    //return the value 
    return userChoice;
}
// Developing logic for the actual game
// First get the input of both user and computer in the function
function playRound(humanChoice,computerChoice){
    let humanScore = 0;
    let computerScore = 0;
    if (humanChoice == "rock" && computerChoice == "scissors")
    {
        console.log("rock Beats scissors")
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper")
    {
        console.log("scissors beats paper")
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock")
    {
        console.log("paper beats rock")
        humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "paper")
    {
        console.log("paper beats rock")
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock")
    {
        console.log("rock beats scissors")
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors")
    {
        console.log("scissors beats paper")
        computerScore++;
    }
    console.log(computerScore,humanScore);
}
// Use comparsion operators to determine the winner
// Print out the winner
// Increment the score of the winner
// get the return value and store it in a glboal variable
let computer = getComputerChoice();
let user  = getHumanChoice();
console.log(user,computer);
playRound(user,computer);

