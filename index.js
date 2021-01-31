// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  { name: "name", message: "what is your name?", type: "input" },
  { name: "age", message: "What is your Age?", type: "input" },
  { name:"title", message: "What is the Title of your project?", type: "input"},
  { name: "license", message: "Which type of license would you like to use?", type: "list", choices: ["Apache","BSD 2-Clause License", "GNU GPL v2","MIT", "Mozzila"]}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("sucess")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([...questions])
  .then((response) => {
    const {name, age, title}= response
    console.log(`Age is: ${age}, and My name is ${name}`)

    console.log(response)

    const answer= generateMarkdown.createMarkdown(response)

    writeToFile("example.md", answer)
  

  
  })
  
}

// Function call to initialize app
init();
