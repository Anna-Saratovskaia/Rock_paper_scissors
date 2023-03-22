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
    currentRound++;
    if(currentRound >= 5) playing = false;
    
    currentRoundEl.textContent = `${currentRound.toString()}`
    computerChoiceEl.textContent = `${computerChoice}`.slice(0, 1).toUpperCase() + `${computerChoice}`.slice(1)

    // if(currentRound >= 5) {
    //     btnsEl.forEach(btn => btn.removeEventListener('click',  play))
    // }
           
    if(computerChoice === playerChoice){
        result.textContent = ` draw. You both threw ${computerChoice}`
        
    }  else if (computerChoice === 'rock' && playerChoice === 'paper') {
        result.textContent = ` You win! Paper beats rock.`; 
        
        playerScore++
        playerScoreEl.textContent = `${playerScore.toString()}`
    } else if(computerChoice === 'scissors' && playerChoice === 'paper') {
        result.textContent = ` You lose! Scissors beat paper`;
        
        computerScore++;
        computerScoreEl.textContent = `${computerScore.toString()}`
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        result.textContent = ` You lose! Rock beats scissors`;
        
        computerScore++;
        computerScoreEl.textContent = `${computerScore.toString()}`
    }else if(computerChoice === 'paper' && playerChoice === 'scissors') {
        result.textContent = ` You win! Scissors beats paper`;
        resultParent.append(result)
        
        playerScore++
        playerScoreEl.textContent = `${playerScore.toString()}`
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        result.textContent = ' You win! Rock beats scissors';
        
        playerScore++
        playerScoreEl.textContent = `${playerScore.toString()}`
    } else {
        result.textContent = ' You lose! Paper beats rock';
        
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