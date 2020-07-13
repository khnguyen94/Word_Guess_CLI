// Define a constructor function that can be used to create "letter" objects
let Letter = function (letter) {
  // Save the character passed into the Letter constructor
  this.letter = letter;

  // Create a variable isGuessed to hold boolean for the state for whether that letter has been guessed or not
  this.isGuessed = false;

  // Function that returns the character if the letter has been guessed, or a placeholder (underscore) of the letter has not been guessed
  this.toString = function () {
    // Tenary statement to check if isGuessed is true or false
    // Condition ? ifTrue : ifFalse
    // ifTrue: return the letter
    // ifFalse: return an underscore
    return this.isGuessed || this.letter === " " ? this.letter : "_";
  };

  // A function that takes guessedLetter as an argument and checks it against the 
  // Updates the stored boolean value to true if it was guessed correctly
  this.checkGuess = function (guessedLetter) {
    // Check if the guessedLetter is equal to the stored letter value
    if (guessedLetter.toLowerCase() === this.letter.toLowerCase()) {
      // If so, set guessed value to true
      this.isGuessed = true;
    }
  };
};

module.exports = Letter;
