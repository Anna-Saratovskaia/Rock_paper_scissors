let btnRock = document.querySelector('.rock');
let btnPaper = document.querySelector('.paper');
let btnScissors = document.querySelector('.scissors');
let result = document.createElement('p');
let resultContainer = document.querySelector('.result');
let btnPlay = document.querySelector('.play');


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
        result.textContent = `Draw! You both chosen ${computerSelection}.`
    } else if (computerSelection === 'rock') {
        result.textContent = `You win! Paper beats rock.`
    } else if(computerSelection === 'scissors') {
        result.textContent = `You lose! Scissors beat paper`
    }
    resultContainer.appendChild(result)
})

btnRock.addEventListener('click', function() {
    let computerSelection = getComputerChoice();
    if (computerSelection === 'rock') {
        result.textContent = `Draw! You both chosen rock.`
    } else if (computerSelection === 'paper') {
        result.textContent = `You lose! Paper beats rock`
    } else if (computerSelection === 'scissors') {
        result.textContent = `You win! Rock beats scissors.`
    }
    resultContainer.appendChild(result);
})

btnScissors.addEventListener('click', function () {
    let computerSelection = getComputerChoice();
    if (computerSelection === 'scissors') {
        result.textContent = `Draw! You both chosen ${computerSelection}.`
    } else if (computerSelection === 'rock') {
        result.textContent = `You lose! Rock beats scissors`
    }  else if (computerSelection === 'paper') {
        result.textContent = `You win! Scissors beat paper.`
    } 
    resultContainer.appendChild(result)

})



