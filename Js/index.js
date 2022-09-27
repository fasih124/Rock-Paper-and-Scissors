// globle variable of player
let computer = 0;
let player = 0;

// varables

const title = document.querySelector(".title");
const playerscore = document.querySelector(".playerScore");
const computerscore = document.querySelector(".computerScore");
const reset = document.querySelector(".reset");
const options = document.querySelectorAll(".option");
const winner = document.querySelector(".Winner");

options.forEach((option) => {
  option.addEventListener("click", () => {
    let playerChoice = option.textContent;
    let computerChoice = getComputerChoice();
    title.textContent = playRound(playerChoice, computerChoice);
    playerscore.textContent = player;
    computerscore.textContent = computer;
    if (player === 5) {
      winner.textContent = "  🏆 player wins the Games";
    } else if (computer === 5) {
      winner.textContent = "  🏆 Computer wins the Games";
    }

    if (player === 6 || computer === 6) {
      resetGame();
    }
    console.log(option.textContent);
    console.log("check");
    console.log(playerChoice);
    console.log(computerChoice);
    console.log(player);
    console.log(computer);
  });
});

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

// check who wins
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    // console.log("Draw");
    return "Draw";
  } else {
    if (playerSelection === "Paper" && computerSelection === "Scissors") {
      // console.log("Computer Wins");
      ++computer;
      return "Computer Wins";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
      // console.log("player Wins");
      ++player;
      return "Player Wins";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
      // console.log("player Wins");
      ++player;
      return "Player Wins";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
      // console.log("Computer Wins");
      ++computer;
      return "Computer Wins";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
      // console.log("Computer Wins");
      ++computer;
      return "Computer Wins";
    } else if (
      playerSelection === "Scissors" &&
      computerSelection === "Paper"
    ) {
      // console.log("player Wins");
      ++player;
      return "Player Wins";
    } else {
      console.log("invalid Choice");
      return 0;
    }
  }
}
// reset game
reset.addEventListener("click", resetGame);

function resetGame() {
  computer = 0;
  player = 0;
  winner.textContent = "";
  playerscore.textContent = player;
  computerscore.textContent = computer;
}
