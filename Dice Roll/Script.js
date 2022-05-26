const playerDiceEl = document.getElementById("player-dice");
const computerDiceEl = document.getElementById("computer-dice");
const rollBtn = document.getElementById("roll");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
let player_score = 0;
let computer_score = 0;

const dices = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
];

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

