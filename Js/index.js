
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

      //    testing the result of functions
      let computerChoice = getComputerChoice();
      console.log(computerChoice);
      let playerChoice = getplayerChoice();
      console.log(playerChoice);

      //
      function playRound(playerChoice, computerChoice) {
        // if (playerChoice===computerChoice) {
        //   return "Draw";
        // }else if()
        // {
        //   return "Draw";
        // }
        //  else {
        //   return "invalid Choice";
        // }
      }