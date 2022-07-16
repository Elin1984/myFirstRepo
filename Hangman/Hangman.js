class Hangman {
    constructor(word, guesses = 3) {
      this.word = word.toLowerCase().split("");
      this.remainingGuesses = guesses;
      this.myGuesses = [" "];
      this.status = "playing";
    }
  
    setStatus() {
      const finished = this.word.every((letter) =>
        this.myGuesses.includes(letter)
      );
  
      if (finished) {
        this.status = "finished";
      } else if (this.remainingGuesses === 0) {
        this.status = "failed";
      }
    }
  
    get statusMessage() {
      if (this.status == "playing") {
        return `You have ${this.remainingGuesses} guesses left`;
      } else if (this.status == "finished") {
        return "Great job!!";
      } else {
        return `The word is: ${this.word.join("")} ,Good luck next time`;
      }
    }
  
    get puzzle() {
      let puzzle = "";
      this.word.forEach((letter) => {
        if (this.myGuesses.includes(letter) || letter === " ") {
          puzzle += letter;
        } else {
          puzzle += "_";
        }
      });
  
      return puzzle;
    }
  
    makeGuess(guess) {
      if (this.status !== "playing") return;
      guess = guess.toLowerCase();
  
      if (this.myGuesses.includes(guess)) {
        return;
      } else if (!this.word.includes(guess)) {
        this.remainingGuesses--;
      }
  
      this.myGuesses.push(guess);
  
      this.setStatus();
    }
  }