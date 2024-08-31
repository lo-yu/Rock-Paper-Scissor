function getComputerChoice() {
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
