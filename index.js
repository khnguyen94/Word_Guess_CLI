// Import all dependencies
const inquirer = require("inquirer");
const Letter = require("./letter");
const Word = require("./word");

// Create a new word object
let word = new Word();

// Prompt the user for a guess, must be a valid letter
inquirer.prompt()