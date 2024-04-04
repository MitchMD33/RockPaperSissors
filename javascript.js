const selections = ["rock","paper","sissors"];

function getComputerChoice(Rock, Paper, Sissors) {
   const choice = selections[Math.floor(Math.random() * selections.length)];
   console.log(choice);
}

getComputerChoice();
