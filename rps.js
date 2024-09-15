const rock = 0;
const paper = 1;
const scissors = 2;
const max = 3;


function getComputerChoice() {
        const randomNumber = Math.floor(Math.random() * max);
    if (randomNumber == rock) {
        return "Rock";
    } 
    else if (randomNumber == paper) {
        return "Papper";
    }
    else if (randomNumber == scissors) {
        return "Scissors";
    } 
}

function getHumanChoice() {
    let sign = prompt("Choose between rock, paper and scissors");
    sign = sign.toLowerCase();
   if (sign == "rock" || sign == "paper" || sign == "scissors") {
    return sign;
   } 
   else {
    return "Choose between rock,paper or scissors";
   }
} 

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == scissors) {
        console.log("You win! Rock beats scissors");
        humanScore++;
    } 
    else if (humanChoice == "paper" && computerChoice == rock) {
        console.log("You win! Paper beats rock");
        humanScore++;
    } 
    else if (humanChoice == "scissors" && computerChoice == paper) {
        console.log("You win! Scissors beats rock");
        humanScore++;
    } 
    else if (humanChoice == "scissors" && computerChoice == rock) {
        console.log("You lose! Rock beats scissors");
        computerScore++;
    } 
    else if (humanChoice == "rock" && computerChoice == paper) {
        console.log("You lose! Paper beats rock");
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == scissors) {
        console.log("You lose! Scissors beats paper");
        computerScore++;
    } 
    else if (humanChoice == computerChoice) {
        console.log("It`s a draw!")
    }
} 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == scissors) {
        console.log("You win! Rock beats scissors");
        humanScore++;
    } 
    else if (humanChoice === "paper" && computerChoice === rock) {
        console.log("You win! Paper beats rock");
        humanScore++;
    } 
    else if (humanChoice === "scissors" && computerChoice === paper) {
        console.log("You win! Scissors beats rock");
        humanScore++;
    } 
    else if (humanChoice === "scissors" && computerChoice === rock) {
        console.log("You lose! Rock beats scissors");
        computerScore++;
    } 
    else if (humanChoice === "rock" && computerChoice === paper) {
        console.log("You lose! Paper beats rock");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === scissors) {
        console.log("You lose! Scissors beats paper");
        computerScore++;
    } 
    else if (humanChoice === computerChoice) {
        console.log("It`s a draw!")
    }
  } 

  for (let i = 0; i < 5; i++)

}

playGame()
