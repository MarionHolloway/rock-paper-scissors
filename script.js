/* This function takes a string and returns that string with only the first letter capitalized. 
It can take strings that are lowercase, UPPERCASE or BoTh.*/
function capitalise(string){
    // Select and capitalise first letter
    var firstLetter = string.charAt(0);
    firstLetter = firstLetter.toUpperCase();

    // Select and make the remaining letters lowercase 
    var otherLetters = string.slice(1);
    otherLetters = otherLetters.toLowerCase();

    // Rebuild string
    newString = firstLetter + otherLetters;

    return newString;
}

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

/* This function plays a single round of Rock Paper Scissors. 
It takes two parameters: playerSelection and computerSelection.
It returns the winner of the round as a string. */
function playRound(playerSelection, computerSelection) {
    let winner;
    // Determine winner
    if (playerSelection == computerSelection) {
        console.log("There is a tie!");
    }
    // There are three conditions in which the player can win
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
            (playerSelection == "Scissors" && computerSelection == "Paper") || 
            (playerSelection == "Paper" && computerSelection == "Rock")) {
        // Change message to "You win! [player selection] beats [computer selection]"
        console.log("You win! " + playerSelection + " beats " + computerSelection + ".");
        winner = "player";
    }
    else {
        console.log("You lose! " + computerSelection + " beats " + playerSelection + ".");
        winner = "computer";
    }        

    return winner;
}  

/* This function plays a 5 round game, keeps score, and reports who wins at the end.*/
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    // For each of 5 rounds
    for (let i = 0; true; i++) {
        // Get suitable input from user
        let playerSelection = capitalise(prompt("Rock, paper or scissors?"));
        while (playerSelection != "Rock" && playerSelection != "Paper" && 
                playerSelection != "Scissors") {
            playerSelection = capitalise(prompt("Let's try that again... Rock, paper or scissors?"));
        }
        
        let winnerOfRound = playRound(playerSelection, computerPlay());
        
        // Update scores
        switch (winnerOfRound) {
            case "player":
                playerScore++;
                break;
            case "computer":
                computerScore++;
                break;
            default:
                break;
        }        
    }
    
    // Report winner of match
    if (playerScore > computerScore) {
        console.log("You win! You scored " + playerScore + " and the computer scored " + 
                computerScore + ". Well done!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose! You scored " + playerScore + " and the computer scored " + 
                computerScore + ". Commiserations!");
    }
    else {
        console.log("You tied! You both scored " + playerScore + ". Better try again!");
    }
}

game();