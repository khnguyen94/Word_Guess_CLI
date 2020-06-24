// Import all dependencies
const Letter = require("./letter");

// Create a constructor function for creating new word objects
// Parameters: 
let Word = function() {
    // this.letters will be an empty array to hold all of the letters for this word
    this.letters = []; 
    
    // A function that returns a string representing the word
    // This function should make a call to the displayLetter function defined in letter.js for every letter in the word
    // Concatenates all the underscores or characters together
    this.returnString = function() {
        for (var i = 0; i < this.letters.length; i++) {
            Letter.displayLetter(this.letters[i]); 
        }
    };

    // A function that takes a character as an argument 
    // For each letter in the word, call the checkLetter function defined in letter.js 
    this.callCheckLetter = function(guessedCharacter) {
        for (var i = 0; i < this.letters.length; i++) {
            Letter.checkLetter(guessedCharacter); 
        }
    }; 
}; 