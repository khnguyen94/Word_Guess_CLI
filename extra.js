// Import all dependencies
const inquirer = require("inquirer");
const chalk = require("chalk");
const Letter = require("./letter");
const Word = require("./word");
const wordBank = require("./wordBank");

// Create a constructor function that will 1) keep the score and 2) control the flow of the game
let Game = function () {
  // Display welcome message to user
  console.log("You've started a game of Guess-That-Pokemon!");

  

  // Create a play function that 1) sets the amount of guesses allowed to 10 and 2) runs the nextWord function to get the next word
  this.playGame = function () {
    this.guessesLeft = 10;
    this.nextWord();
  };

  // A function that creates a new Word object using a random word from the wordBank
  this.nextWord = function () {
    // Obtain a random index
    let randomIndex = Math.floor(Math.random() * wordBank.length);

    // Use that randomIndex to obtain a random word from the wordBank
    let randomPokemon = wordBank[randomIndex];

    // Create a new Word object with randomPokemon
    this.currentPokemon = new Word(randomPokemon);
    console.log("\n" + this.currentPokemon + "\n");

    // Run the makeGuess function
    this.promptGuess();
  };

  // Use inquirer to prompt the user for a letter guess
  this.promptGuess = function () {
    // Run the askForLetter function, then run a callback function
    this.askForLetter().then(function () {
      // Check if the user has any guesses remaining after this current guess
      if (this.guessesLeft < 1) {
        // If so, show them the word
        console.log(
          'That was your last guess. You have no guesses left! The Pokemon was: "' +
            this.currentPokemon.getSolution() +
            '"\n'
        );

        // Then run the askToPlayAgain function to see if they want to play again
        this.askToPlayAgain();
      }
      // If user has guessed all letters of the currentPokemon correctly, 1) reset guessesLeft to 10 and 2) get the next word
      else if (this.currentPokemon.guessedCorrectly()) {
        // Display message that they guessed the Pokemon
        console.log("You guessed the Pokemon! Next Pokemon!");

        // Reset guessesLeft to 10
        this.guessesLeft = 10;

        // Run the nextWord function
        this.nextWord();
      }
      // Otherwise, prompt the user to guess the next letter by running promptGuess function
      else {
        this.promptGuess();
      }
    });
  };

  // A function that asks the user if they want to play again if they have run out of guesses for the currentPokemon
  this.askToPlayAgain = function () {
    // Use inquirer to ask if they want to play again
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Do you want to play again?",
        },
      ])
      .then(function (val) {
        // Then run a callback function that takes in val as a param
        // If the user confirms yes that they want to play another game, run the play function to play again, otherwise quit the game
        if (val.choice) {
          this.playGame();
        } else {
          this.quitGame();
        }
      });
  };

  // A function that prompts the user for a letter
  this.askForLetter = function () {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "choice",
          message: "Guess a letter!",
          validate: function (val) {
            // The users guess must be a number or letter
            return /[a-z1-9]/gi.test(val);
          },
        },
      ])
      .then(function (val) {
        // Then run a callback function that takes in val as a param
        // If the user's guess is in the current word, log that they chose correctly
        // Create a variable to hold whether or not the user guess is correct, run guessLetter using val.choice to see if the user's letter guess is in the currentPokemon
        let isCorrectGuess = this.currentPokemon.guessLetter(val.choice);

        // If isCorrectGuess is true
        if (isCorrectGuess) {
          // Display a message to the user saying that their guess was correct, use chalk to highlight message green
          console.log(chalk.green("\nCorrect letter guess!\n"));
        }
        // Otherwise, decrement guessesLeft and let the user know how many guesses they have left
        else {
          this.guessesLeft--;
          // Display incorrect letter guess message
          console.log(chalk.red("\nSorry, incorrect letter guess!\n"));
          console.log("Guesses remaining: " + this.guessesLeft + "\n");
        }
      });
  };

  // A function that quits the game and exits the node application
  this.quitGame = function () {
    // Display goodbye message
    console.log("\nGoodbye!");
    // Exit the node app
    process.exit(0);
  };
};

// Initialize a new game object
let game = new Game();

// Start the game
game.startGame();
