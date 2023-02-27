//import packages
const inquirer = require('inquirer');
const fs = require('fs');
const { generateTeam } = require('./dist/generateTeam');

//lib modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//array for responses to questions
const newEmployeeData = [];

//questions populated in terminal
const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is yor ID number?",
                name: "id",
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email",
            },
            {
                type: "list",
                message: "What is your role?",
                name: "role",
                choices: ["Engineer", "Intern", "Manager"],
            },
        ])

    // console.log(answers);
    //questions if manager selected
    if (answers.role === "Manager") {
        const managerAns = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your office number?",
                    name: "officeNumber",
                },
            ])
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAns.officeNumber
        );
        newEmployeeData.push(newManager);

        //if engineer selected - answer these questions
    } else if (answers.role === "Engineer") {
        const githubAns = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your Github user name?",
                    name: "github",
                }
            ])
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            githubAns.github
        );
        newEmployeeData.push(newEngineer);

        //if intern selected - answer following questions
    } else if (answers.role === "Intern") {
        const internAns = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What university did you attend?",
                    name: "school",
                },
            ])
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAns.school
        );
        newEmployeeData.push(newIntern);
    }
};

//function to end questions
async function promptQuestions() {
    await questions()

    const addEmployeeAns = await inquirer
        .prompt([
            {
                name: 'addEmployee',
                type: 'list',
                choices: ['Add a new employee', 'Create team'],
                message: "What would you like to do next?"
            }
        ])

    if (addEmployeeAns.addEmployee === 'Add a new employee') {
        return promptQuestions()
    }
    return createTeam();
}

promptQuestions();

function createTeam() {
    console.log("new employee", newEmployeeData)
    fs.writeFileSync(
        "./index.html",
        generateTeam(newEmployeeData),
        "utf-8"
    );
}