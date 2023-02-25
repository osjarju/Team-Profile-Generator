//import packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./dist/generateHTML');

//lib modules
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

//array for responses to questions
const newEmployee = [];

//questions populated in terminal
const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
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
                name: 'email',
                message: "Enter the manager's email address:",
            },
            {
                type: 'input',
                name: 'number',
                message: "What is the manager's office number?",
            },
            {
                type: 'list',
                name: 'role',
                message: 'Who would you like to add?',
                choices: ['Manager', 'Engineer', 'Intern', 'None'],
            },
        ])

    console.log(answers);
    //questions if manager selected
    if (answers.role === "Manager") {
        const managerAnswers = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'number',
                    message: "What is the manager's office number?",
                },
            ])
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAnswers.officeNumber
        );
        newEmployee.push(newManager);

        //if engineer selected - answer these questions
    } else if (answers.role === "Engineer") {
        const githubAns = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: "What is the Engineer's Github user name?",
                },
            ])
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            githubAns.github
        );
        newEmployee.push(newEngineer);

        //if intern selected - answer following questions
    } else if (answers.role === "Intern") {
        const internAns = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: "What university does the intern attend?",
                },
            ])
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAns.school
        );
        newEmployee.push(newIntern);
    }
};

//function to end questions
async function promptQuestions() {
    await questions()

    const addEmployeeAns = await inquirer
        .prompt([
            {
                type: 'List',
                name: 'addEmployee',
                message: 'Who would you like to add?',
                choices: ['Add an employee', 'Create team'],
            }
        ])

    if (addEmployeeAns.addEmployee === 'Add a new employee') {
        return promptQuestions()
    }
    return createTeam();
}

promptQuestions();

function createTeam() {
    console.log("new employee", newEmployee)
    fs.writeFileSync(
        "index.html",
        generateTeam(newEmployee),
        "utf-8"
    );
}