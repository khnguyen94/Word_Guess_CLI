// Import all dependencies
const Letter = require("./letter");

// Create a constructor function for creating new word objects
// Parameters:
let Word = function (pokemonName) {
  // this.letters will be an empty array to hold all of the letters for this word
  this.lettersArr = [];

  // Split the pokemonName into an array of letters
  // Then use .map and run an anon function that instantiates a new Letter for each character in that array into a new array and store it back into the lettersArr variable
  lettersArr = pokemonName.split("").map(function (letter) {
    return new Letter(letter);
  });

  // Use prototoypes for the following functions to save memory space and keep one set of these Letter functions as a reference for all instances of Letter created

  // A function that returns a string representing the word
  Word.prototype.getSolution = function () {
    // map over the entire lettersArr and for each letter run anon function
    return this.lettersArr
      .map(function (letter) {
        // Return the solution for each to forn am array of solved letters
        return letter.getSolution();
      })
      .join(""); // Create a string from the array of solved letters;
  };

  // A function that returns a concatenated string from the lettersArr
  Word.prototype.toString = function () {
    return this.lettersArr.join(" ");
  };

  // A function that checks if any letters in the array match the user's guess and updates foundLetter
  // A function that takes a character as an argument
  // For each letter in the word, call the checkLetter function defined in letter.js
  Word.prototype.callCheckLetter = function (guessedCharacter) {
    for (var i = 0; i < this.letters.length; i++) {
      Letter.checkLetter(guessedCharacter);
    }
  };
};
