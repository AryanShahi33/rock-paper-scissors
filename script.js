// Use a random number generator to make the computer pick between rock paper or scissors
// create the function
let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    //create a variable to store the random number
    let computerChoice;
    let random = Math.floor(Math.random()*3);
    if (random == 0){
        computerChoice = "rock";        
    }
    else if (random == 1){
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
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

// loop playGame to make the game 5 rounds
function playGame(){

    for (let i = 1;i<=5;i++)
    {   
        // repeat the process of asking 5 different inputs for both human and randomize for the computer
        let user = getHumanChoice();
        let computer = getComputerChoice();
        playRound(user,computer);
        console.log(user, computer);
    }
    if (humanScore>computerScore){
        console.log("Human wins");
    }
    else if (computerScore>humanScore) {
        console.log("Computer wins");
    }
    else {
        console.log("Draw");
    }
}

// Developing logic for the actual game
// First get the input of both user and computer in the function
function playRound(humanChoice,computerChoice){


    // Use comparsion operators to determine the winner
    if (humanChoice == "rock" && computerChoice == "scissors")
    {
        // Print out the winner
        console.log("You win!,rock Beats scissors")
        // Increment the score of the winner
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper")
    {
        humanScore++;
        console.log("You win!, scissors beats paper")
    }
    else if (humanChoice == "paper" && computerChoice == "rock")
    {
        humanScore++;
        console.log("You win!, paper beats rock")
    }
    else if (humanChoice == "rock" && computerChoice == "paper")
    {
        computerScore++;
        console.log("You lose!, paper beats rock")
    }
    else if (humanChoice == "scissors" && computerChoice == "rock")
    {
        computerScore++;
        console.log("You lose!, rock beats scissors")
    }
    else if (humanChoice == "paper" && computerChoice == "scissors")
    {
        computerScore++;
        console.log("You lose!, scissors beats paper");
    }
    return computerScore,humanScore;
}


playGame();
