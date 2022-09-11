console.log("Let's play: Rock Paper Scissors!");


const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let playerRock = playerSelection("rock");
let playerPaper = playerSelection("paper");
let playerScissors = playerSelection("scissors");
let computer = getComputerChoice();

let computerScore = 1;
let playerScore = 1;

let pWin = 0;
let cWin = 0;

const score = document.querySelector('#score');
const playerScoreUpdate = document.querySelector('.player');
const compScoreUpdate = document.querySelector('.computer');


function playerSelection(choice){
    let playerChoice = choice;

    if (playerChoice === rock){
        return 0;
    } else if (playerChoice === paper){
        return 1;
    } else {
        return 2;
    }
}

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0){
        return 0;
    } else if (computerChoice === 1){
        return 1;
    } else {
        return 2;
    }
}

function playRound(player, computer) {
    if (player === computer) {
        return score.textContent = "You both chose the same, it's draw";
    } // rock beats scissors 
    else if (player === 0 && computer === 2){
        score.textContent = "Player chose rock, computer chose scissors. You win!";
        playerScoreUpdate.textContent ="Player score: ";
        playerScoreUpdate.textContent += playerScore;
        return playerScore += 1;
    } //vice versa
    else if (player === 2 && computer === 0){
        score.textContent = "Computer chose rock, you lose!";
        compScoreUpdate.textContent = "Computer score: ";
        compScoreUpdate.textContent += computerScore;
        return computerScore += 1;
    }
    //paper beats rock
    else if (player === 1 && computer === 0){
        score.textContent = "Player chose paper, computer chose rock. You win!";
        playerScoreUpdate.textContent ="Player score: ";
        playerScoreUpdate.textContent += playerScore;
        return playerScore += 1;
    }
    // vice versa
    else if (player === 0 && computer === 1){
        score.textContent = "Computer chose paper, you lose!";
        compScoreUpdate.textContent = "Computer score: ";
        compScoreUpdate.textContent += computerScore;
        return computerScore += 1;
    }
    //scissors beats paper
    else if (player === 2 && computer === 1){
        score.textContent = "Player chose scissors, computer chose paper. You win!";
        playerScoreUpdate.textContent ="Player score: ";
        playerScoreUpdate.textContent += playerScore;
        return playerScore += 1;
    }
    // vice versa
    else if (player === 1 && computer === 2){
        score.textContent = "Computer chose scissors, you lose!";
        compScoreUpdate.textContent = "Computer score: ";
        compScoreUpdate.textContent += computerScore;
        return computerScore += 1;
    }
    
}

const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', () => {
    playRound(playerRock, computer);
    computer = getComputerChoice();
    scoreDisable();
});

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', () => {
    playRound(playerPaper, computer);
    computer = getComputerChoice();
    scoreDisable();
});

const sciBtn = document.querySelector('.scissors');
sciBtn.addEventListener('click', () => {
    playRound(playerScissors, computer);
    computer = getComputerChoice();
    scoreDisable();
});

scoreDisable = () => {
    if(playerScore === 4 || computerScore === 4){
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        sciBtn.disabled = true;
        
        if(playerScore > computerScore){
            score.textContent = "You have won the match! Press reset to play again!";
        }else{
            score.textContent = "You lost! Press reset to play again!";
        }
    }

}

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    sciBtn.disabled = false;
    playerScoreUpdate.textContent = "Player score: ";
    compScoreUpdate.textContent = "Computer score: ";
    score.textContent = "Welcome to Rock,Paper, Scissors. Select a choice on the left to play!";
    playerScore = 1;
    computerScore =1;
})
// game();