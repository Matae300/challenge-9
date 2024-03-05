// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
{ type: "input",
  name: "title",
  message: "What is the title of your project?"},

{ type: "input",
  name: "description",
  message:"add a description"},

{ type: "input",
  name: "instructions",
  message: "installation instructions?"},

{ type: "input",
  name: "usage",
  message: "usage information?"},

{ input: "input",
  name: "contribution",
  message: "what are the contribution guidelines?"},

{ input: "input",
  name: "test",
  message: "what are the test instructions?"},

{ type: "checkbox", 
  name: "license",
  choices: ["MIT", "Boost Software License", "Eclipse Public License","Apache License", "none"],
  message: 'Pick a License.'},

{ type: "input",
  name: "username",
  message: "What is your username?"},

{ type: "input",
  name: "email",
  message: "what is your email?"},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
  console.log("creating Read.me");
  writeToFile("./README.md", generateMarkdown((responses)));
});
}

// Function call to initialize app
init();
