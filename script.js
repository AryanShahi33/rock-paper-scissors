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
function playRound(humanChoice,computerChoice,para,score){


    // Use comparsion operators to determine the winner
    if (humanChoice == "rock" && computerChoice == "scissors")
    {
        // Print out the winner
        para.textContent = "You win!,rock Beats scissors ";
        // Increment the score of the winner
        humanScore++;
        score.textContent = "humanScore: " + humanScore + " computerScore:"+computerScore;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper")
    {
        para.textContent = "You win!, scissors beats paper \n";
        humanScore++;
        score.textContent = "humanScore: " + humanScore + " computerScore:"+computerScore;
    }
    else if (humanChoice == "paper" && computerChoice == "rock")
    {
        para.textContent = "You win!, paper beats rock \n";
        humanScore++;
        score.textContent = "humanScore: " + humanScore + " computerScore:"+computerScore;
    }
    else if (humanChoice == "rock" && computerChoice == "paper")
    {   
        para.textContent = "You lose!, paper beats rock \n";
        computerScore++;
        score.textContent = "humanScore: " + humanScore + " computerScore:"+computerScore;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock")
    {
        para.textContent = "You lose!, rock beats scissors \n";
        computerScore++;
        score.textContent = "humanScore: " + humanScore + " computerScore:"+computerScore;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors")
    {
        para.textContent = "You lose!, scissors beats paper";
        computerScore++;
        score.textContent = "humanScore: " + humanScore + " computerScore:"+computerScore;
    }
    else if (humanChoice == computerChoice){
        para.textContent = "Draw";
    }
    return humanScore,computerScore;
}

let div = document.querySelector("div");

let rock = document.getElementById("rock")
rock.addEventListener('click',(event) => {
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    let para = document.createElement("p");
    let score = document.createElement("p")
    div.appendChild(para)
    div.appendChild(score);
    if (humanScore == "5"){
        para.textContent = "HUMAN WINS"
    }
    else if (computerScore == "5"){
        para.textContent = "COMPUTER WINS"
    }
    else{
    playRound(humanChoice,computerChoice,para,score);
    }
})

let paper = document.getElementById("paper")
paper.addEventListener('click',(event) => {
    humanChoice = "paper";
    computerChoice = getComputerChoice();
    let para = document.createElement("p");
    let score = document.createElement("p");
    div.appendChild(para);
    div.appendChild(score)
    if (humanScore == "5"){
        para.textContent = "HUMAN WINS"
    }
    else if (computerScore == "5"){
        para.textContent = "COMPUTER WINS"
    }
    else{
    playRound(humanChoice,computerChoice,para,score);
    }
})

let scissors = document.getElementById("scissors")
scissors.addEventListener('click',(event) => {
    humanChoice = "scissors";
    computerChoice = getComputerChoice();
    let para = document.createElement("p");
    let score = document.creeateElement("p");
    div.appendChild(para);
    div.appendChild(score);
    if (humanScore == "5"){
        para.textContent = "HUMAN WINS"
    }
    else if (computerScore == "5"){
        para.textContent = "COMPUTER WINS"
    }
    else{
    playRound(humanChoice,computerChoice,para,score);
    }
});


