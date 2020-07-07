// Define a constructor function that can be used to create "letter" objects
let Letter = function (letter) {
  // Save the underlying character
  this.letter = letter;

  // If a character is not a number or a letter, make it visible right away
  this.guessed = !/[a-z1-9]/i.test(letter);

  // Use prototoypes for the following functions to save memory space and keep one set of these Letter functions as a reference for all instances of Letter created

  // Function that returns underlying character if the letter has been guessed, or a placeholder (underscore) of the letter has not been guessed
  Letter.prototype.toString = function () {
    // If the letter's guessed state is true
    if (this.guessed === true) {
      console.log("Already Guessed. Letter is: " + this.letter);

    // Return the character
      return this.letter;
    }
    // Else, if the letter's guessed state is false  
    else {
      // Check to see if the letter is an empty space
      if (this.letter === " ") {
        // Set guessed state to true
        this.guessed = true; 

        // Then return the empty space 
        return " ";
      }
      // Else, if the letter is anything but an empty space
      else {
        // Return the letter value
        return this.letter; 
      }
    }
  };

  // A function that takes a character as an argument and checks it against the underlying character
  // Updates the stored boolean value to true if it was guessed correctly
  Letter.prototype.checkGuess = function (guessedLetter) {
    // Check if the guessedLetter is equal to the stored letter value
    if (guessedLetter.toUpperCase() === this.letter.toUpperCase()) {
      // If so, set guessed value to true
      this.guessed = true;

      // Return a true value
      return true; 
    }
    // Else, return false
    else {
      return false;
    }
  };

  // A simple function that just returns the letter when needed
  Letter.prototype.getLetter = function() {
    return this.letter;
  };

};

module.exports = Letter;
