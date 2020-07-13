// Import all dependencies
const inquirer = require("inquirer");
const chalk = require("chalk");
const Letter = require("./letter");
const Word = require("./word");
const wordBank = require("./wordBank");

// Create a constructor function that will 1) keep the score and 2) control the flow of the game
let Game = function () {
  // Display welcome message to user
  console.log("You've started a game of Guess-That-Pokemon!\n");

  // Save a reference to the game as the variable self for use in inquirer, because in inquirer, "this" no longer refers to the instance of the game
  let self = this;

  this.guessesLeft = 0;
  this.incorrectLetters = [];
  this.correctLetters = [];
  this.currentPokemon;
  this.pokemonNameStr = "";

  // A function to start the game
  this.startGame = function () {
    // Set guessesLeft to 10;
    this.guessesLeft = 10;

    // Run pickRandomPokemon function
    this.pickRandomPokemon();

    // console.log(this.currentPokemon);

    // Run promptGuess function
    this.promptGuess();
  };

  // A function to pick random Pokemon from wordBank
  this.pickRandomPokemon = function () {
    // Obtain a random index
    let randomIndex = Math.floor(Math.random() * wordBank.length);

    // Use that randomIndex to obtain a random word from the wordBank
    let randomPokemon = wordBank[randomIndex].toLowerCase();

    // Set pokemonNameStr
    this.pokemonNameStr = randomPokemon;

    // console.log("Current Pokemon: " + this.pokemonNameStr + "\n");

    // Create a new Word object with randomPokemon, assign it to currentPokemon
    this.currentPokemon = new Word(randomPokemon);
  };

  // A function to prompt the user for a guess
  this.promptGuess = function () {
    // Create a displayCurrentStr variable to hold and display current word string returned from running guessWord
    let displayCurrentStr = self.currentPokemon.displayWord();

    // Display it
    console.log("Current Pokemon: " + displayCurrentStr + "\n");

    // Use inquirer
    inquirer
      .prompt([
        {
          type: "input",
          name: "choice",
          message: "Guess a letter! (Guesses Left: " + self.guessesLeft + ")\n",
        },
      ])
      .then(function (val) {
        // Run the guessWord function on the val.choice
        self.currentPokemon.guessWord(val.choice);

        // console.log("Found Letter: " + self.currentPokemon.foundLetter);

        // If a guessedLetter has been found in lettersArr
        if (self.currentPokemon.foundLetter) {
          // And if the current stringed word is equal to the pokemon name, then console.log a completed Pokemon guess message

          if (self.pokemonNameStr === self.currentPokemon.lettersArrStr) {
            console.log("You guessed the Pokemon! It's: " + self.pokemonNameStr);
            self.startGame();
          } else {
            console.log("Correct Guess!");
            self.promptGuess();
          }
        }
        // Else, this means that the user has guessed a wrong letter
        else {
          // Decrement guessesLeft by 1
          self.guessesLeft--;

          // If guessesLeft is 0
          if (self.guessesLeft === 0) {
            // Display fail message for that pokemon for the user
            console.log("You ran out of guesses! Try guess this next Pokemon!");

            // Run startGame
            self.startGame();
          }
          // This means that the user had a wrong guess but they still have guesses remaining
          else {
            // Display incorrect guess message
            console.log("Incorrect Guess!");
            self.promptGuess();
          }
        }
      });
  };
};

// Initialize a new game object
let game = new Game();

game.startGame();

// console.log(game);
