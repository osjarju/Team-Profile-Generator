const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./generateHTML');


const teamManager = [{
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
    message: "Enter the manager's email address",
},
{
    type: 'input',
    name: 'office number',
    message: "What is the manager's office number",
},
{
    type: 'list',
    name: 'employee menu',
    message: 'Who would you like to add?',
    choices: ['Intern', 'Engineer']
}]
