const choices = ["rock", "paper", "sissors"];


function getComputerChoice() {
   const  pick = choices[Math.floor(Math.random()* choices.length)];
   return pick;
}

function checkWinner(playerSelection, computerSelection) {
 if(playerSelection == computerSelection) {
  return "Tie";
 } else if (
      (playerSelection == "rock" && computerSelection == "sissors") ||
      (playerSelection == "sissors" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "rock")
 ){
  return "Player";
 }
 else {
  return "Computer";
 }
}

function playRound() {
  const result = checkWinner(playerSelection, computerSelection);
  if(result == "Tie"){
    return "It's a Tie!"
  }
  else if(result == "Player"){
    return `You win! ${playerSelection} beats ${computerSelection}`
  }
  else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  }
}

function getPlayerChoice() {
  let validatedInput = false;
  while(validatedInput == false){
    const choice = prompt("Rock Paper Sissors");
    if(choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if(choices.includes(choiceInLower)){
      validatedInput = true;
      return choiceInLower;

    }
  }
}


const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));