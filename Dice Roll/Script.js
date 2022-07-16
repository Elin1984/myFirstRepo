
const playerDiceEl = document.getElementById("player-dice");
const computerDiceEl = document.getElementById("computer-dice");
const rollBtn = document.getElementById("roll");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
let player_score = 0;
let computer_score = 0;

const dices = [
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
  "./images/5.png",
  "./images/6.png",
]

rollBtn.onclick = handleRollDice;
function handleRollDice() {
  shakeDiceElement();
  let [playerNumber, playerDiceImage] = generateRandomNumberAndImage();
  let [computerNumber, computerDiceImage] = generateRandomNumberAndImage();

  playerDiceEl.src = playerDiceImage;
  computerDiceEl.src = computerDiceImage;

  if (playerNumber === computerNumber) return;
  if (playerNumber > computerNumber) {
    player_score++;
    playerScoreEl.textContent = player_score;
  } else {
    computer_score++;
    computerScoreEl.textContent = computer_score;
  }
}

function generateRandomNumberAndImage() {
  let random = Math.trunc(Math.random() * 6);
  return [random + 1, dices[random]];
}

function shakeDiceElement() {
  playerDiceEl.className = "shake";
  computerDiceEl.className = "shake";

  setTimeout(() => {
    playerDiceEl.className = "";
    computerDiceEl.className = "";
  }, 500);
}

