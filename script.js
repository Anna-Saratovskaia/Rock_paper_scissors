let btnRock = document.querySelector('.rock');
let btnPaper = document.querySelector('.paper');
let btnScissors = document.querySelector('.scissors');
let result = document.querySelector('.result h2');
let btnPlay = document.querySelector('.play-btn');
let currentRoundEl = document.querySelector('h3 p');
let computerScoreEl = document.querySelector('.computer-score');
let playerScoreEl = document.querySelector('.player-score');
let btnsEl = document.querySelectorAll('.btns');


let playing = true;
let computerScore = 0;
let playerScore = 0;
let currentRound = 0;


btnsEl.forEach(btn => {
    btn.addEventListener('click', function(){
        let computerChoice = getComputerChoice()
        console.log(computerChoice)
        let playerChoice = btn.dataset.playerChoice;
        currentRound++;
        currentRoundEl.textContent = `${currentRound.toString()}`

        if(computerChoice === playerChoice){
            result.textContent = `The result of this round is: draw. You both threw ${computerChoice}`
        }  else if (computerChoice === 'rock' && playerChoice === 'paper') {
            result.textContent = `The result of this round is: You win! Paper beats rock.`; 
            playerScore++
            playerScoreEl.textContent = `${playerScore.toString()}`
        } else if(computerChoice === 'scissors' && playerChoice === 'paper') {
            result.textContent = `The result of this round is: You lose! Scissors beat paper`;
            computerScore++;
            computerScoreEl.textContent = `${computerScore.toString()}`
        } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
            result.textContent = `The result of this round is: You lose! Rock beats scissors`;
            computerScore++;
            computerScoreEl.textContent = `${computerScore.toString()}`
        }else if(computerChoice === 'paper' && playerChoice === 'scissors') {
            result.textContent = `The resilt of this round is: You win! Scissors beats paper`;
            playerScore++
            playerScoreEl.textContent = `${playerScore.toString()}`
        } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
            result.textContent = 'The result of this round is: You win! Rock beats scissors';
            playerScore++
            playerScoreEl.textContent = `${playerScore.toString()}`
        } else {
            result.textContent = 'The result of this round is: you lose! Paper beats rock';
            computerScore++;
            computerScoreEl.textContent = `${computerScore.toString()}`
        }
    }) 

})


function getComputerChoice() {
    let random = Math.ceil(Math.random() * 10);
    let computerChoice;
    if(random <= 3) {
        computerChoice = 'rock';
    } else if(random > 3 && random <= 7) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors'
    }
    return computerChoice;
}


