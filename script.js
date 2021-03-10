'use strict';

let playerScore = 0;
let computerScore = 0;
let computerSelection = "&nbsp";

const choiceRock = document.querySelector('#rock');
const choicePaper = document.querySelector('#paper');
const choiceScissors = document.querySelector('#scissors');
const computerChoiceText = document.querySelector('#computer-choice');

choiceRock.addEventListener('click', () => {
    let playerSelection = "rock";
    playRound(playerSelection, computerPlay());
});
choicePaper.addEventListener('click', () => {
    let playerSelection = "paper";
    playRound(playerSelection, computerPlay());
});
choiceScissors.addEventListener('click', () => {
    let playerSelection = "scissors";
    playRound(playerSelection, computerPlay());
});

function playRound(playerSelection, computerSelection){

    if(playerSelection === "rock"){
        switch(computerSelection){
            case "rock":
                return "It's a tie! You both chose " + playerSelection + "."
                break;
            case "paper":
                computerScore+= 1
                return "You lose, " + playerSelection + " is beaten by " + computerSelection + "!"
                break;
            case "scissors":
                playerScore+= 1
                return "You win, " + playerSelection + " beats " + computerSelection + "!"
                break;
        }
    }
    if(playerSelection === "paper"){
        switch(computerSelection){
            case "rock":
                playerScore+= 1
                return "You win, " + playerSelection + " beats " + computerSelection + "!"
                break;
            case "paper":
                return "It's a tie! You both chose " + playerSelection + "."
                break;
            case "scissors":
                computerScore+= 1
                return "You lose, " + playerSelection + " is beaten by " + computerSelection + "!"
                break;
        }
    }
    if(playerSelection === "scissors"){
        switch(computerSelection){
            case "rock":
                computerScore+= 1
                return "You lose, " + playerSelection + " is beaten by " + computerSelection + "!"
                break;
            case "paper":
                playerScore+= 1
                return "You win, " + playerSelection + " beats " + computerSelection + "!"
                break;
            case "scissors":
                return "It's a tie! You both chose " + playerSelection + "."
                break;
        }
    }

}

function computerPlay(){
    let rng = Math.floor(Math.random() * 3);

    switch(rng){
        case 0:
            computerSelection = "rock";
            computerChoiceText.textContent = "Rock";
            break;
        case 1:
            computerSelection = "paper";
            computerChoiceText.textContent = "Paper";
            break;
        case 2:
            computerSelection = "scissors";
            computerChoiceText.textContent = "Scissors";
            break;
    }
}

function Tie(){

}

function Win(){

}

function Loss(){

}