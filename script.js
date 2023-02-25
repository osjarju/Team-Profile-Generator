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
}
}


const managerQuestions = [{
    type: 'input',
    name: 'name',
    message: "Who is the manager of the team?",
},


{
    type: 'input',
    name: 'number',
    message: "What is the manager's office number?",
}];

//questions array - to add new employee
const employeeType = [
    {
        type: 'list',
        name: 'choices',
        message: 'Who would you like to add?',
        choices: ['Manager', 'Engineer', 'Intern', 'None']
    }
];

//questions array - engineer
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
        name: 'email',
        message: "Enter the engineer's email address:",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's Github username?",
    }
];

//questions array - intern
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
        name: 'email',
        message: "What is the Intern's email address?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What school is the Intern from?",
    }];

//questions array to continue or end questions
const continuePrompt = [{
    type: 'input',
    name: 'continue',
    message: 'Would you like to continue? (yes/no)',
}];

function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

//function to end questions and generate HTML file if continue declined by typing 'no'
function inquireEmployeeType() {
    inquirer.prompt(employeeType)
        .then((data) => {

            // generateHTML.generateManagerHTML(data))
            //Return manager questions if choice selected is Manager
            let questions = '';
            if (data.choices === 'Manager') {
                console.log(data.choices)
                questions = managerQuestions;
                console.log(questions)
                //Return engineer questions if choice selected is Engineer
            } else if (data.choices === 'Engineer') {
                questions = engineerQuestions;

                //Return intern questions if choice selected is Intern
            } else if (data.choices === 'Intern') {
                questions = internQuestions;
            }

            inquireEmployeeQuestions(questions);
        })
        .then((data) => {
            console.log(data.continue)
            if (data.continue === 'no') {
                writeToFile('./dist/index.html', "Hello")
            }
        });
}

//function to continue questions if 'yes' typed
function inquireContinue() {
    inquirer.prompt(continuePrompt)
        .then((data) => {
            if (data.continue === 'yes') {
                inquireEmployeeType();
            } else if (data.continue === 'no') {
                console.log(data.continue)
                writeToFile('index.html', generateHTML.generateManagerHTML(data))
            } else {
                inquireContinue();
            }
        });
}

function inquireEmployeeQuestions(questions) {
    inquirer.prompt(questions)
        .then((data) => {
            console.log(data);
            inquireContinue();
        });
}

function init() {
    inquireEmployeeType();
}

init();

//Miscellaneous
//else {writeToFile('index.html', generateHTML.generateManagerHTML(data))}
//console.log(generateHTML.generateManagerHTML({ name: "manager", description: "test" }))