// globle variable of player
let computer = 0;
let player = 0;

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
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Draw");
    return 0;
  } else {
    if (playerSelection === "Paper" && computerSelection === "Scissors") {
      console.log("Computer Wins");
      return ++computer;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
      console.log("player Wins");
      return ++player;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
      console.log("player Wins");
      return ++player;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
      console.log("Computer Wins");
      return ++computer;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
      console.log("Computer Wins");
      return ++computer;
    } else if (
      playerSelection === "Scissors" &&
      computerSelection === "Paper"
    ) {
      console.log("player Wins");
      return ++player;
    } else {
      console.log("invalid Choice");
      return 0;
    }
  }
}

function game() {
  for (let i = 0; i < 10; i++) {
    let playerChoice = getplayerChoice();
    let computerChoice = getComputerChoice();
    console.log(`player selects: ${playerChoice}`);
    console.log(`computer selects: ${computerChoice}`);
    playRound(playerChoice, computerChoice);
    if (player === 5) {
      console.log("player wins the Games");
      break;
    } else if (computer === 5) {
      console.log("Computer wins the Games");
      break;
    }
  }
}

game();
