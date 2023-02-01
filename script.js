let btnRock = document.querySelector('.rock');
let btnPaper = document.querySelector('.paper');
let btnScissors = document.querySelector('.scissors');
let result = document.querySelector('.result h2');
let btnPlay = document.querySelector('.play');
let currentRound = document.querySelector('.current-round');
let computerScore = document.querySelector('.computer-score');
let playerScore = document.querySelector('.player-score')


function play () {
    
}
function getComputerChoice() {
    let random = Math.trunc(Math.random() * 10);
    let computerChoice;
    if(random <= 3) {
        computerChoice = 'rock'
    } else if (random > 3 && random <= 6) {
        computerChoice = 'paper'
    } else {
        computerChoice = "scissors"
    }

    return computerChoice
}

function getPlayerCoice() {

   let playerChoice = prompt('What is your choice?')
   return playerChoice.toLowerCase()

}

btnPaper.addEventListener('click', function() {
    let computerSelection = getComputerChoice();
    if (computerSelection === 'paper') {
        result.textContent = `The result of this round is: Draw! You both chosen ${computerSelection}.`
    } else if (computerSelection === 'rock') {
        result.textContent = `The result of this round is: You win! Paper beats rock.`
    } else if(computerSelection === 'scissors') {
        result.textContent = `The result of this round is: You lose! Scissors beat paper`
    }
})

btnRock.addEventListener('click', function() {
    let computerSelection = getComputerChoice();
    if (computerSelection === 'rock') {
        result.textContent = `The result of this round is: Draw! You both chosen rock.`
    } else if (computerSelection === 'paper') {
        result.textContent = `The result of this round is: You lose! Paper beats rock`
    } else if (computerSelection === 'scissors') {
        result.textContent = `The result of this round is: You win! Rock beats scissors.`
    }
})

btnScissors.addEventListener('click', function () {
    let computerSelection = getComputerChoice();
    if (computerSelection === 'scissors') {
        result.textContent = `The result of this round is: Draw! You both chosen ${computerSelection}.`
    } else if (computerSelection === 'rock') {
        result.textContent = `The result of this round is: You lose! Rock beats scissors`
    }  else if (computerSelection === 'paper') {
        result.textContent = `The result of this round is: You win! Scissors beat paper.`
    } 
})



