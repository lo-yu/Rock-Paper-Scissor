let humanScore = 0;
let computerScore = 0;

let getComputerChoice = function() {
    let random = Math.floor(Math.random() * 100);
    // console.log(random);
    if (random >= 0 && random <= 33){
        return "rock";
    }
    else if (random >= 34 && random <= 66) {
        return "paper";
    }
    else {
        return "scissor";
    }
}
// console.log(getComputerChoice());

let getHumanChoice = function() {
    let choice = window.prompt("What will you play?");
    if(choice.toLowerCase() == "rock") {
        return choice;
    }
    else if(choice.toLowerCase() == "paper") {
        return choice;
    }
    else if(choice.toLowerCase() == "scissor") {
        return choice;
    }
}
// console.log(getHumanChoice());

let playRound = function(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock"){
        console.log("You tied");
    }
    else if (humanChoice == "paper" && computerChoice == "paper"){
        console.log("You tied");
    }
    else if (humanChoice == "scissor" && computerChoice == "scissor"){
        console.log("You tied");
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You win! Rock beats Paper");
        humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissor"){
        console.log("You win! Rock beats Scissor");
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissor"){
        console.log("You lose! Scissor beats Paper");
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You lose! Rock beats Paper");
        computerScore++;
    }
    else if (humanChoice == "scissor" && computerChoice == "paper"){
        console.log("You win! Scissor beats Paper");
        humanScore++;
    }
    else if (humanChoice == "scissor" && computerChoice == "rock"){
        console.log("You lose! Rock beats Scissor");
        computerScore++;
    }
  }
  
//   let humanSelection = getHumanChoice().toLowerCase();
//   let computerSelection = getComputerChoice();

//   playRound(humanSelection, computerSelection);

function playGame() {

    for (i = 0; i < 5; i++ ) {
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Your score: " +humanScore);
        console.log("Computer score: " +computerScore);
    }
    if (humanScore > computerScore) {
        console.log("You have won");
    }
    else if (computerScore > humanScore) {
        console.log("You have lost. Computer have won")
    }
    else {
        console.log("You have tied with the computer");
    }
}
 
playGame();







  

//   console.log(humanSelection);
//   console.log(computerSelection);
//   
//   console.log(playRound(humanSelection, computerSelection));
  