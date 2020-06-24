// * A string value to store the underlying character for the letter

// * A boolean value that stores whether that letter has been guessed yet

// * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

// * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly


// Define a constructor function that can be used to create "letter" objects

let Letter = function() {
    this.character = null;
    this.guessed = false; 

    // Function that returns underlying character if the letter has been guessed, or a placeholder (underscore) of the letter has not been guessed
    this.displayLetter = function() {
        if (this.guessed === true) {
            console.log("Already Guessed. Letter is: " + this.character);


        }
    };
};

module.exports = Letter; 