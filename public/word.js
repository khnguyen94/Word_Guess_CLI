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
  // A function that takes a guessedCharacter as an argument
  Word.prototype.checkLetter = function (guessedCharacter) {
      // Initiate and set a foundLetter variable to false
      let foundLetter = false; 

    // For each letter in the lettersArr, run an anon function
    this.lettersArr.forEach(function(letter) {
        // Check if any letters in lettersArr match the user's guess by running the checkGuess function on the guessedLetter from letter.js
        if (letter.checkGuess(guessedCharacter)) {
            // Set foundLetter to true
            foundLetter = true;
        }
        
        // Print the word guessed so far 
        // Because we set the mthod for toString, JS will auto concatenate this even if we dont call toString
        console.log("\n" + this + "\n");

        // Return whether a letter has been found or not
        return foundLetter;
    });
  };

  // A function that returns true if all letters in the word have been guessed
  Word.prototype.guessedCorrectly = function() {
    // Using the array method .every, to loop over lettersArr to see if every letter's guessed status is true
    // .every returns true if the callback func returns true for every element in the array it is looping over
    return this.lettersArr.every(function(letter) {
        return letter.guessed;
    });
  };
};


module.exports = Word;