const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./generateHTML');
console.log(generateHTML.generateManagerHTML({ name: "manager", description: "test" }))

const newEmployee = []

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
    name: 'email',
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
        name: 'choices',
        message: 'Who would you like to add?',
        choices: ['Manager', 'Engineer', 'Intern', 'None']
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
        name: 'email',
        message: "Enter the engineer's email address:",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's Github username?",
    },
    {
        type: 'input',
        name: 'continue',
        message: 'Would you like to continue?',
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
        name: 'email',
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
    inquirer.prompt(employeeType)
        .then(function (data) {
            console.log(data)

            if (data.choices === "Manager") {
                inquirer.prompt(managerQuestions)
                    .then(function (data) {
                        console.log(data)

                        if (data.choices === "Engineer") {
                            inquirer.prompt(engineerQuestions)
                                .then(function (data) {
                                    console.log(data)

                                    if (data.choices === "Intern") {
                                        inquirer.prompt(internQuestions)
                                            .then(function (data) {
                                                console.log(data)

                                                newEmployee.push({ name: data.name })


                                                if (data.continue === "yes") {
                                                    init()
                                                } else { writeToFile('index.html', JSON.stringify(newEmployee)) }


                                            })
                                    }
                                })
                        }
                    })
            }
        })

};

init();

                        // inquirer.prompt(managerQuestions)
                            //     .then(function (data) {
                            //         console.log(data)
                            //         writeToFile('index.html', generateHTML.generateManagerHTML(data))
                            //     });

//else {writeToFile('index.html', generateHTML.generateManagerHTML(data))}
