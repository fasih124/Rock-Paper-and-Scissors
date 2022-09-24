console.log("hello world");
// function to get random Cumputer Choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber === 1
    ? "Rock"
    : randomNumber === 2
    ? "Paper"
    : randomNumber === 3
    ? "Scissors"
    : "none";
}

// // function to get Player Choice
function getplayerChoice() {
  let choice = prompt("Enter Your Choice(Rock,Paper,Scissors): ");
  let firstLetter = choice.slice(0, 1).toUpperCase();
  let otherLetters = choice.slice(1, choice.length).toLowerCase();
  return (choice = `${firstLetter}${otherLetters}`);
}

// check who wins
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Draw";
  } else {
    if (playerChoice === "Paper" && computerChoice === "Scissors") {
      return "Computer Wins";
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      return "Player Wins";
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
      return "Player Wins";
    } else if (playerChoice === "Rock" && computerChoice === "Paper") {
      return "Computer Wins";
    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
      return "Computer Wins";
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
      return "Player Wins";
    } else {
      return "invalid Choice";
    }
  }
}

//    testing the result of functions
let computerChoice = getComputerChoice();
console.log(computerChoice);
let playerChoice = getplayerChoice();
console.log(playerChoice);
let result = playRound(playerChoice, computerChoice);
console.log(result);
