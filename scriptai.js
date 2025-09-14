const buttons = document.querySelectorAll("button");
let computerScore = 0;
let humanScore = 0;
let ties = 0;

let totalRounds = prompt("How many games you want in a round?");
let roundsPlayed = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    ties++;
    return "tie";
  }

  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    computerScore++;
    return "computer";
  } else {
    humanScore++;
    return "human";
  }
}

function highlightChoice(humanChoice, computerChoice, result) {
  // reset all buttons
  buttons.forEach(b => {
    b.style.backgroundColor = "black";
    b.style.color = "white";
    b.style.transform = "scale(1)";
    b.style.border = "none";
  });

  const humanBtn = Array.from(buttons).find(b => b.value === humanChoice);
  const compBtn = Array.from(buttons).find(b => b.value === computerChoice);

  if (result === "tie") {
    humanBtn.style.backgroundColor = "orange";
    humanBtn.style.color = "black";
    humanBtn.style.border = "3px solid darkorange";
  } else {
    // human
    humanBtn.style.backgroundColor = "white";
    humanBtn.style.color = "black";
    humanBtn.style.border = "2px solid grey";

    // computer
    compBtn.style.backgroundColor = "red";
    compBtn.style.color = "white";
    compBtn.style.border = "2px solid darkred";
  }
}

buttons.forEach(button => {
  button.addEventListener("click", e => {
    if (roundsPlayed >= totalRounds) {
      alert("Game over! Final Scores:\nYou: " + humanScore + 
            "\nComputer: " + computerScore + "\nTies: " + ties);
      return;
    }

    const humanChoice = e.currentTarget.value;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    highlightChoice(humanChoice, computerChoice, result);

    console.log(`Round ${roundsPlayed+1}: You chose ${humanChoice}, Computer chose ${computerChoice}, Winner: ${result}`);

    roundsPlayed++;

    if (roundsPlayed == totalRounds) {
      if (humanScore > computerScore) {
        alert("You won the match!");
      } else if (computerScore > humanScore) {
        alert("Computer won the match!");
      } else {
        alert("Match tied!");
      }
    }
  });
});
