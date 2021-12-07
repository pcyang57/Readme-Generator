// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const userInput = [
  {
    type: "input",
    name: "title",
    message: "What is your project name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project.",
  },
  {
    type: "list",
    name: "license",
    message: "What of license should your project have?",
    choices: ["Apache 2.0", "MIT", "BSD 3", "GNU"],
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run for tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the this repo?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Who are the contributors of this projects?",
  },

  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    
    type: "input",
    name: "email",
    message: "What is your email address?",
    
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err
      ? console.log(err)
      : console.log("Your README file is ready!");
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log("Readme file");
  inquirer.prompt(userInput).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();