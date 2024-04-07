const choices = ["rock", "paper", "sissors"];
const userDisplay = document.getElementById("userDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
   const  pick = choices[Math.floor(Math.random()*3)];
   return pick;
}


function playRound(playerChoice){
  const computerSelection = getComputerChoice();
  let result = "";
 
  if(playerChoice == computerSelection) {
    result = "IT'S A TIE!";
  } else {
    switch(playerChoice) {
      case "rock":
        result = (computerSelection == "sissors")? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = (computerSelection == "rock")? "YOU WIN!" : "YOU LOSE!";
        break;
      case "sissors":
        result = (computerSelection == "paper")? "YOU WIN!" : "YOU LOSE!";
        break;
      }
      
    }

    userDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerSelection}`;
    resultDisplay.textContent = result;


    switch(result) {
      case "YOU WIN!":
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break;
      case "YOU LOSE!":
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        break;
    }
  }
   

