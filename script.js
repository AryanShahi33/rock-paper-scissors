// Use a random number generator to make the computer pick between rock paper or scissors
// create the function
function getComputerChoice(){
    //create a variable to store the random number
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
//create a function to get input from user for rock paper or scissors
function getHumanChoice(){
    //ask user for input
    let userChoice = prompt("Choose between rock paper and scissors");
    //convert user input to uppercase to avoid any issues
    let uppercase = userChoice.toUpperCase();
    userChoice = uppercase;
    //return the value 
    return userChoice;
}
// get the return value and store it in a glboal variable
let computer = getComputerChoice();
let user  = getHumanChoice();
console.log(computer,user);

