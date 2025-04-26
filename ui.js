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

/*let getHumanChoice = function() {
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
}*/
// console.log(getHumanChoice());

/*let playRound = function(humanChoice, computerChoice) {
    humanChoice = e.id.value;
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

/*function playGame() {

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
}*/
let result = document.querySelector("#result");

let determineWinner = function(){
    if(humanScore == 5 && humanScore > computerScore){
       // let result = document.querySelector("#result");
        result.textContent = "You won!";
        result.style.color = "green";
        result.style.fontSize = "30px";
        humanScore = 0; computerScore = 0;
       // result.textContent = "";


    }
    else if(computerScore == 5 && computerScore > humanScore){
      //  let result = document.querySelector("#result");
        result.textContent = "You lost! Computer won";
        result.style.color = "red";
        result.style.fontSize = "30px";
        humanScore = 0; computerScore = 0;
       // result.textContent = "";

    }

}






const buttons = document.querySelectorAll("button");

//result.textContent = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", function() {
        if (btn.id == "rock" && getComputerChoice() == "rock"){
            //console.log("You tied");
            //console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore +"  Computer score: "+computerScore ;
            result.textContent = "";
            //let player = document.querySelector("#player");
           // player.textContent = "Your score: "+humanScore;
        }
        else if (btn.id  == "paper" && getComputerChoice() == "paper"){
           // console.log("You tied");
            //console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore+ "  Computer score: "+computerScore ;
            result.textContent = "";
        }
        else if (btn.id  == "scissor" && getComputerChoice() == "scissor"){
            //console.log("You tied");
           // console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore+"  Computer score: "+computerScore ;
            result.textContent = "";
        }
        else if (btn.id  == "rock" && getComputerChoice()== "paper"){
           // console.log("You lose! Paper beats Rock");
            computerScore++;
            //console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore+"  Computer score: "+computerScore ;
            result.textContent = "";
            determineWinner();
        }
        else if (btn.id  == "rock" && getComputerChoice()== "scissor"){
           // console.log("You win! Rock beats Scissor");
            humanScore++;
           // console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore +"  Computer score: "+computerScore ;
            result.textContent = "";
            determineWinner();
        }
        else if (btn.id  == "paper" && getComputerChoice() == "scissor"){
           // console.log("You lose! Scissor beats Paper");
            computerScore++;
           // console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore +"  Computer score: "+computerScore ;
            result.textContent = "";
            determineWinner();
        }
        else if (btn.id  == "paper" && getComputerChoice()== "rock"){
           // console.log("You win! Paper beats Rock");
            humanScore++;
            //console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore+"  Computer score: "+computerScore ;
            result.textContent = "";
            determineWinner();
        }
        else if (btn.id  == "scissor" && getComputerChoice()== "paper"){
           // console.log("You win! Scissor beats Paper");
            humanScore++;
          //  console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore+"  Computer score: "+computerScore ;
            result.textContent = "";
            determineWinner();
        }
        else if (btn.id  == "scissor" && getComputerChoice()== "rock"){
           // console.log("You lose! Rock beats Scissor");
            computerScore++;
           // console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore+"  Computer score: "+computerScore ;
            result.textContent = "";
            determineWinner();
        }
    })
})







//playGame();







  

//   console.log(humanSelection);
//   console.log(computerSelection);
//   
//   console.log(playRound(humanSelection, computerSelection));
  