// Import all dependencies
const Letter = require("./letter");

// Create a constructor function for creating new word objects
// Parameters:
let Word = function (pokemonName) {
  // this.letters will be an empty array to hold all of the letters for this word
  this.lettersArr = [];

  this.lettersArrCopy = [];

  // this.lettersArrStr will be the string that holds the concatenated string from lettersArr
  this.lettersArrStr = "";

  // this.letterFound will be a boolean for use when checking whether or not a letter in lettersArr has been found or not
  this.foundLetter = false;

  // Split the pokemonName into an array of letters
  // Then use .map and run an anon function that instantiates a new Letter for each character in that array into a new array and store it back into the lettersArr variable

  // A function that splits pokemonName parameter passed into Word constructor into individual letters and maps them into the lettersArr
  this.lettersArr = pokemonName.split("").map(function (letter) {
    return new Letter(letter);
  });

  this.lettersArrCopy = this.lettersArr.map(function(letter) {
    return letter.letter
  });

  // console.log(this.lettersArrCopy);

  // console.log("Letters Array: " + this.lettersArr + "\n");

  // A function that displays the current lettersArr as a string
  this.displayWord = function () {
    return this.lettersArr.join("");
  };

  // A function that takes in a single letter guess from the user and checks it with the lettersArr
  this.guessWord = function (guessedLetter) {
    // For each letter in the lettersArr, run an anon function that runs the Letter.checkGuess function on guessedLetter
    // for each letter in lettersArr, checkGuess sets each letter's isGuessed property to either true or false and depending on that condition, displays 1) the letter or space or 2) an underscore

    console.log("Guessed Letter: " + guessedLetter);

    this.lettersArr.forEach(function (letter) {
      // Run checkGuess function for each letter object, pass in guessedLetter 
      letter.checkGuess(guessedLetter);
    });

    this.foundLetter = this.lettersArrCopy.includes(guessedLetter);

    console.log("Letters Array: " + this.lettersArr + "\n");

    // Set lettersArrStr to a string formed from lettersArr
    this.lettersArrStr = this.lettersArr.join("");
  };
};

module.exports = Word;
