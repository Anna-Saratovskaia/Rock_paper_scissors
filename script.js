let btnRock = document.querySelector('.rock');
let btnPaper = document.querySelector('.paper');
let btnScissors = document.querySelector('.scissors');



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
        alert(`Draw! You both chosen ${computerSelection}.`)
    } else if (computerSelection === 'rock') {
        alert(`You win! Paper beats rock. `)
    } else if(computerSelection === 'scissors') {
        alert (`You lose! Scissors beat paper`)
    }
})

btnRock.addEventListener('click', function() {
    let computerSelection = getComputerChoice();
    if (computerSelection === 'rock') {
        alert(`Draw! You both chosen rock.`)
    } else if (computerSelection === 'paper') {
        alert(`You lose! Paper beats rock`)
    } else if (computerSelection === 'scissors') {
        alert (`You win! Rock beats scissors.`)
    }
})

btnScissors.addEventListener('click', function () {
    let computerSelection = getComputerChoice();
    if (computerSelection === 'scissors') {
        alert(`Draw! You both chosen ${computerSelection}.`)
    } else if (computerSelection === 'rock') {
        alert (`You lose! Rock beats scissors`)
    }  else if (computerSelection === 'paper') {
        alert (`You win! Scissors beat paper.`)
    } 
})

function playRound() {
    let computerSelection = getComputerChoice();
let playerSelection = getPlayerCoice();
    console.log(computerSelection, playerSelection)
    
    if (computerSelection === playerSelection) {
        alert(`Draw! You both chosen ${computerSelection}.`)
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        alert (`You lose! Rock beats scissors`)
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        alert(`You win! Paper beats rock. `)
    }

    else if (computerSelection === 'paper' && playerSelection === 'rock') {
        alert(`You lose! Paper beats rock`)
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        alert (`You win! Scissors beat paper.`)
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        alert (`You win! Rock beats scissors.`)
    } else if(computerSelection === 'scissors' && playerSelection === 'paper') {
        alert (`You lose! Scissors beat paper`)
    }
}

