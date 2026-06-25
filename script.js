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

let rock = document.getElementById("rock")
rock.addEventListener('click',(event) => {
    humanChoice = "rock";
})

let paper = document.getElementById("paper")
paper.addEventListener('click',(event) => {
    humanChoice = "paper";
})

let scissors = document.getElementById("scissors")
scissors.addEventListener('click',(event) => {
    humanChoice = "scissors";
});

