const icons = document.querySelectorAll(".icons");
const resetButton = document.querySelector("#reset-btn");
const options = ["Rock", "Scissors", "Paper"];
let playerScore = 0;
let computerScore = 0;

resetButton.addEventListener("click", () => {
  document.querySelector(".icons-container").style.display = "flex";
  playerScore = 0;
  computerScore = 0;
  document.querySelector("body").style.backgroundColor = "#f5f6fa";
  resetButton.style.display = "none";
  updateMessage("Pick something");
  updateScore();
});

function updateMessage(message) {
  document.querySelector("#pick-message").textContent = message;
}

function updateScore() {
  document.querySelector("#player-score").textContent = playerScore;
  document.querySelector("#computer-score").textContent = computerScore;
}

function hideIconsAndShowReset() {
  document.querySelector(".icons-container").style.display = "none";
  resetButton.style.display = "block";
}

function handleWinner() {
  let message;
  let backgroundColor;
  if (playerScore === 5) {
    message = "You WON!!! Great job!!";
    backgroundColor = "#4cd137";
  } else {
    message = "You LOSS..., Better luck next time!";
    backgroundColor = "#e84118";
  }
  document.querySelector("body").style.backgroundColor = backgroundColor;
  updateMessage(message);
  hideIconsAndShowReset();
}

icons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    let playerInput = event.target.name;
    let computerInput = options[Math.floor(Math.random() * 3)];
    let message = `Player picked ${playerInput}, Computer picked ${computerInput}`;
    updateMessage(message);

    if (playerInput === computerInput) {
      console.log("its a tie!");
      return;
    }

    if (playerInput === "Rock") {
      if (computerInput === "Scissors") {
        playerScore++;
      } else {
        computerScore++;
      }
    } else if (playerInput === "Scissors") {
      if (computerInput === "Rock") {
        computerScore++;
      } else {
        playerScore++;
      }
    } else {
      if (computerInput === "Rock") {
        playerScore++;
      } else {
        computerScore++;
      }
    }

    updateScore();

    if (playerScore === 5 || computerScore === 5) {
      handleWinner();
    }
  });
});
