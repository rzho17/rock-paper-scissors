console.log("Let's play: Rock Paper Scissors!");


const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let player = playerSelection();
let computer = getComputerChoice();

let computerScore = 0;
let playerScore = 0;

let pWin = 0;
let cWin = 0;

function playerSelection(){
    let playerChoice = prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase();

    if (playerChoice === rock){
        console.log("rock");
        return 0;
    } else if (playerChoice === paper){
        console.log("paper");
        return 1;
    } else {
        console.log("scissors");
        return 2;
    }
}

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0){
        console.log("rock");
        return 0;
    } else if (computerChoice === 1){
        console.log("paper");
        return 1;
    } else {
        console.log("scissors");
        return 2;
    }
}

function playRound(player, computer) {
    if (player === computer) {
        const draw = "This is a draw";
        // console.log(draw);
        return console.log("Draw");
    } // rock beats scissors 
    else if (player === 0 && computer === 2){
        console.log("player beats computer");
        return playerScore += 1;
    } //vice versa
    else if (player === 2 && computer === 0){
        console.log("computer beats player")
        return computerScore += 1;
    }
    //paper beats rock
    else if (player === 1 && computer === 0){
        console.log("player beats computer");
        return playerScore += 1;
    }
    // vice versa
    else if (player === 0 && computer === 1){
        console.log("computer beats player");
        return computerScore += 1;
    }
    //scissors beats paper
    else if (player === 2 && computer === 1){
        console.log("player beats computer");
        return playerScore += 1;
    }
    // vice versa
    else if (player === 1 && computer === 2){
        console.log("computer beats player");
        return computerScore += 1;
    }
}


function game(){
    // call playround
    //set a win counter
    // who ever has more wins in 5 loops in the winner = winner
    //loop the playround function 5 times
    for (let index = 0; index < 5; index++) {
        playRound(player, computer);
        console.log(playerScore);
        console.log(computerScore);
        if (index != 4){
            player = playerSelection();
            computer = getComputerChoice();
        }
    }

    if (playerScore > computerScore){
        console.log("Player wins!");
        console.log("final score player: " + playerScore + " computer : " + computerScore);
    }else if (computerScore > playerScore){
        console.log("computer wins!");
        console.log("final score player: " + playerScore + " computer : " + computerScore);
    }else {
        console.log("It's a tie! Let's play a tie breaker!")
        player = playerSelection();
        computer = getComputerChoice();
        playRound(player,computer);
        console.log("final score player: " + playerScore + " computer : " + computerScore);
    }
}

game();