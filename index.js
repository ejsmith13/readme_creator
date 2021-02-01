//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// array of questions for user input
const questions = [
  { name: "name", message: "What is your name?", type: "input" },
  { name: "github", message: "What is your GitHub user name?", type: "input" },
  { name: "email", message: "What is your email address?", type: "input" },
  { name: "title", message: "What is the Title of your project?", type: "input"},
  { name: "install", message: "What command installs dependencies", type: "input"},
  { name: "test", message: "What command should be used to run tests?", type: "input"},
  { name: "description", message: "Please describe your project", type: "input" },
  { name: "tech", message: "Select the technologies you used in this project", type: "checkbox", choices: ["HTML", "CSS", "JavaScript", "Bootstrap"]},
  { name: "usage", message: "What does the user need to know about using the repo", type: "input"},
  { name:  "contributing", message: "What does the user need to know about contributing to the repo?", type: "input"},
  { name: "license", message: "Which type of license would you like to use?", type: "list", choices: ["Apache","BSD 2-Clause License", "GNU GPL v2","MIT", "Mozilla"]}
];

// function to write README file
function writeToFile(fileName, data) {
  
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("sucess")
  );
}

//function to initialize app
function init() {
  inquirer.prompt([...questions])
  .then((response) => {
 
    const answer= generateMarkdown.createMarkdown(response)

    writeToFile("video.md", answer)
  })
  
}

// Function call to initialize app
init();
