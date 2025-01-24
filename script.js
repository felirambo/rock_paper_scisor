let computerScore = 0;
let humanScore = 0;

let rockBtn = document.querySelector("#rock-btn");
let paperBtn = document.querySelector("#paper-btn");
let scisorBtn = document.querySelector("#scisor-btn");
let scoreDisplay = document.querySelector("#score-display");

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scisorBtn.addEventListener("click", playRound);

let selections = document.querySelector("#selections");

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

function getHumanChoice(e) {
    return e.target.textContent.toLowerCase();
}

function displayScore(winner) {

    if (winner == "human") {
        humanScore++;
        scoreDisplay.innerText = "Player win this round \n";
    }
    else if (winner == "computer") {
        computerScore++; 
        scoreDisplay.innerText = "Computer win this round \n";
    }
    else if (winner == "draw") scoreDisplay.innerText = "It's a draw. \n"

    scoreDisplay.innerText += `Computer Score: ${computerScore} \n Human Score: ${humanScore}`;
    
    if (humanScore == 5) {
        scoreDisplay.innerText += `\n Human win the game!`;
        endGame();
    }
    else if (computerScore == 5) {
        scoreDisplay.innerText += `\n Computer win the game!`;
        endGame();
    }
}

function endGame() {
    rockBtn.removeEventListener("click", playRound);
    paperBtn.removeEventListener("click", playRound);
    scisorBtn.removeEventListener("click", playRound);

    let restartBtn = document.createElement("button");
    restartBtn.innerText = "Restart Game";
    restartBtn.addEventListener("click", restartGame);

    scoreDisplay.appendChild(restartBtn);
}

function restartGame() {

    computerScore = 0;
    humanScore = 0;

    rockBtn.addEventListener("click", playRound);
    paperBtn.addEventListener("click", playRound);
    scisorBtn.addEventListener("click", playRound);

    scoreDisplay.innerText = `Computer Score: ${computerScore} \n Human Score: ${humanScore}`;
    selections.innerText = "";
}


function playRound(e) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice(e);
    let winner = "";

    selections.textContent = `Player choose ${humanChoice}, computer choose ${computerChoice}`;

    if (computerChoice == "rock") {
        if (humanChoice == "scisor") {
            winner = "computer";
        }
        else if (humanChoice == "rock") {
            winner = "draw"
        }
        else {
            winner = "human";
        }
    }
    if (computerChoice == "paper") {
        if (humanChoice == "scisor") {
            winner = "human"
        }
        else if (humanChoice == "rock") {
            winner = "computer";
        }
        else {
            winner = "draw";
        }
    }
    if (computerChoice == "scisor") {
        if (humanChoice == "scisor") {
            winner = "draw";
        }
        else if (humanChoice == "rock") {
            winner = "human";
        }
        else {
            winner = "computer";
        }
    }
    displayScore(winner);
    return
}

