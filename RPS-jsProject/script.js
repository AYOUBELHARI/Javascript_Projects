let humanScore = 0;
let computerScore = 0;
const body = document.querySelector("body");
const result = document.createElement("p");
const score = document.createElement("h5");
const winner = document.createElement("h2");
body.appendChild(result);
body.appendChild(score);
body.appendChild(winner);

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result.textContent = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result.textContent = humanChoice + " beats " + computerChoice + "!  You: " + ++humanScore + ", Computer: " + computerScore;
    } else {
        result.textContent = computerChoice + " beats " + humanChoice + "!  You: " + humanScore + ", Computer: " + ++computerScore;
    }
    body.appendChild(result);
}

function displayFinalScore() {
    score.textContent = "Final Score! " + "You: " + humanScore + ", Computer: " + computerScore;
    if (humanScore > computerScore) {
        winner.textContent = "You are the winner!";
    } else if (computerScore > humanScore) {
        winner.textContent = "Computer is the winner!";
    } else {
        winner.textContent = "The game is a tie!";
    }
    body.appendChild(score);
    body.appendChild(winner);
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();        
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        result.textContent = "";
        score.textContent = "";
        winner.textContent = "";
        playRound(humanChoice, computerChoice);
        if (humanScore === 3 || computerScore === 3) {
            displayFinalScore();
            humanScore = 0;
            computerScore = 0;
        }
    });
});