let humanScore = 0;
let computerScore = 0;




let getComputerChoice = function() {
    let random = Math.floor(Math.random() * 100);
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


let container = document.querySelector("#container");
container.style.display = "flex";
container.style.justifyContent = "space-evenly";
container.style.paddingTop = "350px";
container.style.paddingLeft = "400px";
container.style.paddingRight = "400px";
container.style.paddingBottom = "20px";
container.style.backgroundColor = "skyBlue";

let scoreSection = document.querySelector("#scoreSection");
scoreSection.style.display = "flex";
scoreSection.style.justifyContent = "center";
scoreSection.style.alignItems = "center";
scoreSection.style.fontSize = "30px";
scoreSection.style.paddingTop = "20px";

let resultSection = document.querySelector("#resultSection");
resultSection.style.display = "flex";
resultSection.style.justifyContent = "center";
resultSection.style.alignItems = "center";
resultSection.style.paddingTop = "20px";



let result = document.querySelector("#result");

let determineWinner = function(){
    if(humanScore == 5 && humanScore > computerScore){
        result.textContent = "You won!";
        result.style.color = "green";
        result.style.fontSize = "30px";
        result.style.backgroundColor = "black";

        humanScore = 0; computerScore = 0


    }
    else if(computerScore == 5 && computerScore > humanScore){
        result.textContent = "You lost! Computer won";
        result.style.color = "red";
        result.style.fontSize = "30px";
        result.style.backgroundColor = "black";

        humanScore = 0; computerScore = 0;
    

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
            score.textContent = "Your score: "+humanScore +"     ; Computer score: "+computerScore ;
            result.textContent = "";
            //let player = document.querySelector("#player");
           // player.textContent = "Your score: "+humanScore;
        }
        else if (btn.id  == "paper" && getComputerChoice() == "paper"){
           // console.log("You tied");
            //console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore+ "    ;  Computer score: "+computerScore ;
            result.textContent = "";
        }
        else if (btn.id  == "scissor" && getComputerChoice() == "scissor"){
            //console.log("You tied");
           // console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore+"     ; Computer score: "+computerScore ;
            result.textContent = "";
        }
        else if (btn.id  == "rock" && getComputerChoice()== "paper"){
           // console.log("You lose! Paper beats Rock");
            computerScore++;
            //console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore+"     ; Computer score: "+computerScore ;
            result.textContent = "";
            determineWinner();
        }
        else if (btn.id  == "rock" && getComputerChoice()== "scissor"){
           // console.log("You win! Rock beats Scissor");
            humanScore++;
           // console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore +"     ; Computer score: "+computerScore ;
            result.textContent = "";
            determineWinner();
        }
        else if (btn.id  == "paper" && getComputerChoice() == "scissor"){
           // console.log("You lose! Scissor beats Paper");
            computerScore++;
           // console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore +"     ; Computer score: "+computerScore ;
            result.textContent = "";
            determineWinner();
        }
        else if (btn.id  == "paper" && getComputerChoice()== "rock"){
           // console.log("You win! Paper beats Rock");
            humanScore++;
            //console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore+"     ; Computer score: "+computerScore ;
            result.textContent = "";
            determineWinner();
        }
        else if (btn.id  == "scissor" && getComputerChoice()== "paper"){
           // console.log("You win! Scissor beats Paper");
            humanScore++;
          //  console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore+"     ; Computer score: "+computerScore ;
            result.textContent = "";
            determineWinner();
        }
        else if (btn.id  == "scissor" && getComputerChoice()== "rock"){
           // console.log("You lose! Rock beats Scissor");
            computerScore++;
           // console.log("Your score: "+humanScore, "Computer score: "+computerScore );
            let score = document.querySelector("#score");
            score.textContent = "Your score: "+humanScore+"     ; Computer score: "+computerScore ;
            result.textContent = "";
            determineWinner();
        }
    })
})


buttons.forEach((btn) => {
    btn.style.height= " 100px";
    btn.style.width= "120px";
    btn.style.fontSize= "20px";
    btn.style.border = "solid";
    
})




//playGame();







  

//   console.log(humanSelection);
//   console.log(computerSelection);
//   
//   console.log(playRound(humanSelection, computerSelection));
  