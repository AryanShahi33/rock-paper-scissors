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
    // Use comparsion operators to determine the winner
    if (humanChoice == "rock" && computerChoice == "scissors")
    {
        // Print out the winner
        console.log("rock Beats scissors")
        // Increment the score of the winner
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
    return computerScore,humanScore;
}

// loop playGame to make the game 5 rounds
function playGame(humanScore,computerScore){
    for (let i = 1;i<5;i++)
    {   
        let user = getHumanChoice();
        let computer = getComputerChoice();
        playRound(user,computer);
        console.log(user,computer);
    }
    if (humanScore>computerScore){
        console.log("Human wins by "+ humanScore-computerScore + "Score");
    }
    else {
        console.log("Computer wins by "+ computerScore-humanScore + "Score");
    }
}
let computerScore = playRound();
let humanScore = playRound();
playGame(humanScore,computerScore);