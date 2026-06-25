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
function playRound(humanChoice,computerChoice,span,score){


    // Use comparsion operators to determine the winner
    if (humanChoice == "rock" && computerChoice == "scissors")
    {
        // Print out the winner
        span.textContent = "You win!,rock Beats scissors \n";
        // Increment the score of the winner
        humanScore++;
        score.textContent = humanScore;
        score.textContent = computerScore;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper")
    {
        span.textContent = "You win!, scissors beats paper \n";
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock")
    {
        span.textContent = "You win!, paper beats rock \n";
        humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "paper")
    {   
        span.textContent = "You lose!, paper beats rock \n";
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock")
    {
        span.textContent = "You lose!, rock beats scissors \n";
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors")
    {
        span.textContent = "You lose!, scissors beats paper";
        computerScore++;
    }
    return humanScore,computerScore;
}

let div = document.querySelector("div");

let rock = document.getElementById("rock")
rock.addEventListener('click',(event) => {
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    let span = document.createElement("span");
    let score = document.createElement("span")
    div.appendChild(span)
    div.appendChild(score);
    playRound(humanChoice,computerChoice,span,score);
})

let paper = document.getElementById("paper")
paper.addEventListener('click',(event) => {
    humanChoice = "paper";
    computerChoice = getComputerChoice();
    let span = document.createElement("span");
    let score = document.createElement("span");
    div.appendChild(span);
    div.appendChild(score)
    playRound(humanChoice,computerChoice,span,score);
})

let scissors = document.getElementById("scissors")
scissors.addEventListener('click',(event) => {
    humanChoice = "scissors";
    computerChoice = getComputerChoice();
    let span = document.createElement("span");
    let score = document.creeateElement("span");
    div.appendChild(span);
    div.appendChild(score);
    playRound(humanChoice,computerChoice,span,score);
});


