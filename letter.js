// Define a constructor function that can be used to create "letter" objects

let Letter = function() {
    this.character = null;
    this.guessed = false; 

    // Function that returns underlying character if the letter has been guessed, or a placeholder (underscore) of the letter has not been guessed
    this.displayLetter = function() {
        if (this.guessed === true) {
            console.log("Already Guessed. Letter is: " + this.character);

            this.character = character; 

            return this.character;
        }
        else {
            console.log("Already Guessed. Letter is: " + this.character);

            this.character = "_"; 

            return this.character;
        }
    };

    // A function that takes a character as an argument and checks it against the underlying character
    // Updates the stored boolean value to true if it was guessed correctly
    this.checkLetter = function(guessCharacter) {
        if (guessCharacter === this.character) {
            this.guess = true; 
        }
    }; 
};

module.exports = Letter; 