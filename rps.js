console.log("Hello World!");


const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const player = playerSelection();
const computer = getComputerChoice();

let computerScore = 0;
let playerScore = 0;

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
        return draw;
    } // rock beats scissors 
    else if (player === 0 && computer === 2){
        console.log("player beats computer");
    } //vice versa
    else if (player === 2 && computer === 0){
        console.log("computer beats player")
    }
    //paper beats rock
    else if (player === 1 && computer === 0){
        console.log("player beats computer");
    }
    // vice versa
    else if (player === 0 && computer === 1){
        console.log("computer beats player");
    }
    //scissors beats paper
    else if (player === 2 && computer === 1){
        console.log("player beats computer");
    }
    // vice versa
    else if (player === 1 && computer === 2){
        console.log("computer beats player");
    }
}

console.log(playRound(player,computer));