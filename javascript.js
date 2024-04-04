const choices = ["rock", "paper","sissors"];
const winners = [];

function game() {
  for (let i = 0; i => 5; i++){
    playRound(i);
  }
  logWins();
}

function playRound(round){
const playerSelection = playerChoice();
const computerSelection = computerChoice();
const winner = checkWinner(playerSelection, computerSelection);
winners.push(winner);
logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
  let input = prompt("Type Rock, Paper, or Sissors");
  while(input == null) {
    input =prompt("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
   while (check == false) {
    prompt(
      "Please type only Rock, paper, or sissors. No need for capitalization."
    );

    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];

}

function validateInput(choice){
 return choices.includes(choice);
 
}

function checkWinner(PlayerH, PlayerC) {
  if(PlayerH == PlayerC){
    return 'Tie';
  } else if(
    (PlayerH == "rock" && PlayerC == "sissors") ||
     (PlayerH == "paper" && PlayerC == "rock") ||
     (PlayerC == "sissor" && PlayerC == "paper")
  ) {
    return "Player";
  } else {
    return "PlayerH";
  } 
}

function logWins(){
   let userWins = winners.filter((item) => item == "PlayerH").length;
   let computerWins = winners.filter((item) => item == "Player").length;
   let tied = winners.filter((item) => item == "Tie").length;
   console.log("Results:");
   console.log("You Win:", userWins);
   console.log("You lose:", computerWins);
   console.log("Draw:", tied);
}

/**
 * @param {string} playerChoice
 * @param {string} computerChoice
 * @param {string} winner
 * @param {any} round
 */
function logRound(playerChoice, computerChoice, winner,round) {
  console.log('Round:', round)
  console.log('Choose item:', playerChoice)
  console.log('Computer chooses:', computerChoice)
  console.log(winner, 'Won this round.')
  console.log("-----------------------------------")
}

game();