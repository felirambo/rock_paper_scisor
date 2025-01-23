let rockBtn = document.querySelector("#rock-btn");
let paperBtn = document.querySelector("#paper-btn");
let scisorBtn = document.querySelector("#scisor-btn");

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scisorBtn.addEventListener("click", playRound);

let selections = document.querySelector("#selections");
let winnerField = document.querySelector("#winner-field");
let scoreDisplay = document.querySelector("#score-display");

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

function playRound(e) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice(e);

    selections.textContent = `Player choose ${humanChoice}, computer choose ${computerChoice}`;

    let winnerFieldDisplay1 = "Computer wins!";
    let winnerFieldDisplay2 = "Player wins!";
    let winnerFieldDisplay3 = "It's a draw!";

    if (computerChoice == "rock") {
        if (humanChoice == "scisor") {
            winnerField.textContent = winnerFieldDisplay1;
        }
        else if (humanChoice == "rock") {
            winnerField.textContent = winnerFieldDisplay3;
        }
        else {
            winnerField.textContent = winnerFieldDisplay2;
        }
    }
    if (computerChoice == "paper") {
        if (humanChoice == "scisor") {
            winnerField.textContent = winnerFieldDisplay2;
        }
        else if (humanChoice == "rock") {
            winnerField.textContent = winnerFieldDisplay1;
        }
        else {
            winnerField.textContent = winnerFieldDisplay3;
        }
    }
    if (computerChoice == "scisor") {
        if (humanChoice == "scisor") {
            winnerField.textContent = winnerFieldDisplay3;
        }
        else if (humanChoice == "rock") {
            winnerField.textContent = winnerFieldDisplay2;
        }
        else {
            winnerField.textContent = winnerFieldDisplay1;
        }
    }
    return
}

