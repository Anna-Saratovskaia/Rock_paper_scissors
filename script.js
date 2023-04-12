let resultParent = document.querySelector('.result');
let btnPlay = document.querySelector('.play-btn');
let currentRoundEl = document.querySelector('h3 p');
let computerScoreEl = document.querySelector('.computer-score');
let playerScoreEl = document.querySelector('.player-score');
let btnsEl = document.querySelectorAll('.btns');
let computerChoiceEl = document.querySelector('.computer-choice');
let winEl = document.querySelector('winner');


let playing, computerScore, playerScore, currentRound;

let result = document.createElement('p');

function  init () {
    playing = true;
    computerScore = 0;
    playerScore = 0;
    currentRound = 0;

    result.textContent = '';
    currentRoundEl.textContent = `0`;
    playerScoreEl.textContent = `0`;
    computerScoreEl.textContent = `${computerScore.toString()}`
    computerChoiceEl.textContent = "?";

}

init()

let play = function(event){
    let btn = event.target;
    if (!playing) return;
    let computerChoice = getComputerChoice()
    let playerChoice = btn.dataset.playerChoice;
    console.log(typeof playerChoice)
    currentRound++;
    if(currentRound >= 5) playing = false;
    
    currentRoundEl.textContent = `${currentRound.toString()}`
    computerChoiceEl.textContent = `${computerChoice}`.slice(0, 1).toUpperCase() + `${computerChoice}`.slice(1);
    let playerChoiceText = `${playerChoice}`.slice(0,1).toUpperCase() +`${playerChoice}`.slice(1)
            
    if(computerChoice === playerChoice){
        result.textContent = ` draw. You both threw ${computerChoice}.`
        
    }  else if (computerChoice === 'rock' && playerChoice === 'paper' || computerChoice === 'paper' && playerChoice === 'scissors' || computerChoice === 'scissors' && playerChoice === 'rock') {
        result.textContent = ` You win! ${playerChoiceText} beat ${computerChoice}.`; 
        
        playerScore++
        playerScoreEl.textContent = `${playerScore.toString()}`
    } else {
        result.textContent = ` You lose! ${computerChoiceEl.textContent} beat ${playerChoice}.`;
        
        computerScore++;
        computerScoreEl.textContent = `${computerScore.toString()}`
    }     
}

btnsEl.forEach(btn => {
    btn.addEventListener('click', play);
    resultParent.append(result);
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



btnPlay.addEventListener('click', init);