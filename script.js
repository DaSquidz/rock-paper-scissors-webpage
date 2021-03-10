'use strict';

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    let playerSelectionLower = playerSelection.toLowerCase();
    let computerSelectionLower = computerSelection.toLowerCase();

    if(playerSelectionLower === "rock"){
        switch(computerSelectionLower){
            case "rock":
                return "It's a tie! You both chose " + playerSelectionLower + "."
                break;
            case "paper":
                computerScore+= 1
                return "You lose, " + playerSelectionLower + " is beaten by " + computerSelectionLower + "!"
                break;
            case "scissors":
                playerScore+= 1
                return "You win, " + playerSelectionLower + " beats " + computerSelectionLower + "!"
                break;
        }
    }
    if(playerSelectionLower === "paper"){
        switch(computerSelectionLower){
            case "rock":
                playerScore+= 1
                return "You win, " + playerSelectionLower + " beats " + computerSelectionLower + "!"
                break;
            case "paper":
                return "It's a tie! You both chose " + playerSelectionLower + "."
                break;
            case "scissors":
                computerScore+= 1
                return "You lose, " + playerSelectionLower + " is beaten by " + computerSelectionLower + "!"
                break;
        }
    }
    if(playerSelectionLower === "scissors"){
        switch(computerSelectionLower){
            case "rock":
                computerScore+= 1
                return "You lose, " + playerSelectionLower + " is beaten by " + computerSelectionLower + "!"
                break;
            case "paper":
                playerScore+= 1
                return "You win, " + playerSelectionLower + " beats " + computerSelectionLower + "!"
                break;
            case "scissors":
                return "It's a tie! You both chose " + playerSelectionLower + "."
                break;
        }
    }

}

// Plays 5 rounds
function game(){
        for(let i = 0; i < 5; i++){
            console.log(playRound(playerPlay(), computerPlay()));
            console.log("Player score: " + playerScore);
            console.log("Computer score: " + computerScore);
        }

        if (playerScore > computerScore){
            console.log("You have won the match!")
        }
        else if(computerScore > playerScore){
            console.log("You have lost the match, try again!")
        }
        else{
            console.log("You tied the match!")
        }
        
}

function playerPlay(){
    let choice = window.prompt("Choose your play! (Rock, Paper or Scissors)")
    let choiceLower = choice.toLowerCase();
    if(choiceLower === "rock" || choiceLower === "paper" || choiceLower === "scissors"){
        return choiceLower;
    }
    else{
        window.alert("You typed a choice that does not exist, go to jail (jk, try again by refreshing the window)")
    }
}

function computerPlay(){
    let rng = Math.floor(Math.random() * 3);

    switch(rng){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

console.log(game());