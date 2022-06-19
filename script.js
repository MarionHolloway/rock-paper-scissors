/* This function randomly return "rock", "paper", or scissors"*/
function computerPlay() {
    let selection;
    let randomNumber = Math.floor(Math.random() * 3); // Select random integer between 0 and 2
    
    // Convert random numbers into a selection of "Rock", "Paper", or "Scissors"
    switch (randomNumber) {
        case 0: 
            selection = "Rock";
            break;
        case 1:
            selection = "Paper";
            break;
        case 2:
            selection = "Scissors";
            break;
    }

    return selection;
}

/* This function plays a single round of Rock Paper Scissors. */
function playRound(e) {
    // If no one has won yet
    if (playerTotal < 5 && computerTotal < 5) {
        // Grab the button id which describes the player's choice
        const playerSelection = this.id; 
        const computerSelection = computerPlay();
        
        // Determine winner
        updateScores(determineWinner(playerSelection, computerSelection));

    } 
    if (playerTotal === 5 || computerTotal === 5) {
        if (playerTotal > computerTotal) {
            winner.textContent = "You win!";
        }
        else if (playerTotal < computerTotal) {
            winner.textContent = "You lose!";
        }
    }
}  

/* This function updates the scores according to who won the round. */
function updateScores(winnerOfRound) {
    switch (winnerOfRound) {
        case "player":
            playerTotal++;
            playerScore.textContent = "You: " + playerTotal;
            break;
        case "computer":
            computerTotal++;
            computerScore.textContent = "Computer: " + computerTotal;
            break;
        default:
            break;
    }
}

/* This function controls the logic for determining who won the round.
It takes two arguments: the player's choice and the computer's choice and
returns the winner of the round.*/
function determineWinner(playerSelection, computerSelection) {
    let winnerOfRound;
    if (playerSelection == computerSelection) {
        results.textContent = "There is a tie!";
    }
    // There are three conditions in which the player can win
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
            (playerSelection == "Scissors" && computerSelection == "Paper") || 
            (playerSelection == "Paper" && computerSelection == "Rock")) {
        results.textContent = "You win! " + playerSelection + " beats " + computerSelection + ".";
        winnerOfRound = "player";
    }
    else {
        results.textContent = "You lose! " + computerSelection + " beats " + playerSelection + ".";
        winnerOfRound = "computer";
    }
    return winnerOfRound;
}

let playerTotal = 0;
let computerTotal = 0;

const rock = document.querySelector("button#Rock");
const paper = document.querySelector("button#Paper");
const scissors = document.querySelector("button#Scissors");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

const results = document.querySelector("#results");
const computerScore = document.querySelector("#computer");
const playerScore = document.querySelector("#player");
const winner = document.querySelector("#winner");