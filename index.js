// TODO: Include packages needed for this application
const inquirer= require("inquirer")
const fs= require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {name: "name",
    message: "what is your name?",
    type: "input"},
    {name: "age",
    message: "What is your Age?",
    type: "input"}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([...questions])
    .then((response) =>
        console.log("sucess")
    );
}

// Function call to initialize app
init();