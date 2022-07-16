const puzzleEl = document.querySelector("[data-puzzle]");
const statusMessageEl = document.querySelector("[data-status-message]");
const formEl = document.querySelector("[data-form]");
const wordInput = document.querySelector("[data-word-input]");
const guessesInput = document.querySelector("[data-guesses-input]");

let game;
loadGameFromLocalStorage();

// makeGuess call
window.addEventListener("keypress", function (e) {
  if (game === undefined) return;
  const guess = String.fromCharCode(e.charCode);
  game.makeGuess(guess);
  puzzleEl.innerHTML = game.puzzle;
  statusMessageEl.innerHTML = game.statusMessage;
  if (game.status !== "playing") {
    formEl.hidden = false;
  }
  saveGame();
});

formEl.onsubmit = (e) => {
  e.preventDefault();
  game = new Hangman(wordInput.value, guessesInput.value);
  puzzleEl.innerHTML = game.puzzle;
  statusMessageEl.innerHTML = game.statusMessage;
  resetForm();
  formEl.hidden = true;
  saveGame();
};

function resetForm() {
  wordInput.value = "";
  guessesInput.value = 3;
}

function saveGame() {
  const jsonObj = JSON.stringify({
    word: game.word.join(""),
    guesses: game.remainingGuesses,
  });
  localStorage.setItem("game", jsonObj);
}

function loadGameFromLocalStorage() {
  let saveGame = localStorage.getItem("game");
  saveGame = JSON.parse(saveGame);
  game = saveGame ? new Hangman(saveGame.word, saveGame.guesses) : undefined;
  puzzleEl.innerHTML = game.puzzle;
  statusMessageEl.innerHTML = game.statusMessage;
}

// JSON - 2 option
// JSON.stringify - receive a JS value and convert to json
// JSON.parse - receive a json value and convert to JS