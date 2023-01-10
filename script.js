const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./generateHTML');

const managerQuestions = [{
    type: 'input',
    name: 'name',
    message: "Who is the manager of the team?",
},
{
    type: 'input',
    name: 'id',
    message: "What is the manager's ID?",
},
{
    type: 'input',
    name: 'email address',
    message: "Enter the manager's email address:",
},
{
    type: 'input',
    name: 'office number',
    message: "What is the manager's office number?",
}];

const employeeType = [
    {
        type: 'list',
        name: 'employee menu',
        message: 'Who else would you like to add?',
        choices: ['Intern', 'Engineer', 'Finish building team']
    }];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Engineer's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Engineer's employee ID?",
    },
    {
        type: 'input',
        name: 'email address',
        message: "Enter the engineer's email address:",
    },
    {
        type: 'input',
        name: 'Github',
        message: "What is the Engineer's Github username?",
    }];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Intern's ID?",
    },
    {
        type: 'input',
        name: 'email address',
        message: "What is the Intern's email address?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What school is the Intern from?",
    }];

function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

function init() {
    inquirer.prompt(managerQuestions)
        .then(function (data) {
            writeToFile('index.html', generateHTML(data))
        });
}

init();