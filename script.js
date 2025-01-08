function getComputerChoice() {
    let randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber <= 0.33) {
        return "rock";
    }
    else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        return "scisor";
    }
    else {
        return "paper";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose between 'Rock', 'Paper' and 'Scisor'").toLowerCase();
    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scisor") {
        return humanChoice;
    }
    else {
        console.log("You entered an invalid input. Please read the instructions correctly")
        getHumanChoice();
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    console.log("Now printing humanScore"); 
    console.log(humanScore);
    console.log("Now printing computerScore");
    console.log(computerScore);

    function playRound(computerChoice, humanChoice) {
        console.log(computerChoice);
        if (computerChoice == "rock") {
            if (humanChoice == "scisor") {
                console.log("Computer wins, Rock beats Scisor.");
                computerScore++; 
            }
            else if (humanChoice == "rock") {
                console.log("It's a draw. Both players used Rock.");
            }
            else {
                console.log("You win! Paper beats rock.")
                humanScore++;
            }
        }
        if (computerChoice == "paper") {
            if (humanChoice == "scisor") {
                console.log("You win! Scisor beats Paper.");
                humanScore++;
            }
            else if (humanChoice == "rock") {
                console.log("Computer wins, Paper beats Rock");
                computerScore++;
            }
            else {
                console.log("It's a draw. Both players used Paper.");
            }
        }
        if (computerChoice == "scisor") {
            if (humanChoice == "scisor") {
                console.log("It's a draw. Both players used Scisor.");
            }
            else if (humanChoice == "rock") {
                console.log("You win, Rock beats Scisor");
                humanScore++;
            }
            else {
                console.log("Computer wins, scisor beats paper");
                computerScore++
            }
        }
        return 
    }
    if (humanScore > computerScore) {
        return `Human scored: ${humanScore} agaisn't computer, which scored: ${computerScore}. Human wins`;
    }
    else if (humanScore < computerScore) {
        return `Computer scored: ${computerScore} agaisn't human, who scored: ${humanScore}. Computer wins`;
    }
    else {
        return `It's a draw! Both players scored ${humanScore}`;
    }
}

console.log(playGame());