'use strict';

const gbDarkGreen = "#081820";
const gbGreen = "#346856";
const gbLightGreen = "#88c070";
const gbWhite = "#e0f8d0";


let playerScore = 0;
let computerScore = 0;
let computerSelection = "&nbsp";

const choiceRock = document.querySelector('#rock');
const choicePaper = document.querySelector('#paper');
const choiceScissors = document.querySelector('#scissors');
const computerChoiceText = document.querySelector('#computer-choice');
const roundResultText = document.querySelector('#round-result');

choiceRock.addEventListener('click', () => {
    let playerSelection = "rock";
    computerPlay();
    playRound(playerSelection, computerSelection);
});
choicePaper.addEventListener('click', () => {
    let playerSelection = "paper";
    computerPlay();
    playRound(playerSelection, computerSelection);
});
choiceScissors.addEventListener('click', () => {
    let playerSelection = "scissors";
    computerPlay();
    playRound(playerSelection, computerSelection);
});

function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock"){
        switch(computerSelection){
            case "rock":
                Tie();
                break;
            case "paper":
                computerScore+= 1
                Loss();
                break;
            case "scissors":
                playerScore+= 1
                Win();
                break;
        }
    }
    if(playerSelection === "paper"){
        switch(computerSelection){
            case "rock":
                playerScore+= 1
                Win();
                break;
            case "paper":
                Tie();
                break;
            case "scissors":
                computerScore+= 1
                Loss();
                break;
        }
    }
    if(playerSelection === "scissors"){
        switch(computerSelection){
            case "rock":
                computerScore+= 1
                Loss();
                break;
            case "paper":
                playerScore+= 1
                Win();
                break;
            case "scissors":
                Tie();
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
    document.getElementById("round-result").style.color = gbGreen;
    roundResultText.textContent = "You tied!";
}

function Win(){
    document.getElementById("round-result").style.color = gbLightGreen;
    roundResultText.textContent = "You won!";
}

function Loss(){
    document.getElementById("round-result").style.color = gbWhite;
    roundResultText.textContent = "Computer won!";
}