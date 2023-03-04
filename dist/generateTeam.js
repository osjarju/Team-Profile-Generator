
const generateManagerHTML = (Manager) => {
    console.log(Manager)
    return `<div>
    <h2>${Manager.name}</h2>
    <p>${Manager.id}</p>
    <p>${Manager.email}</p>
    <p>${Manager.officeNumber}</p>
    </div>`
};

const generateEngineerHTML = (Engineer) => {
    return `<div>
    <h2>${Engineer.name}</h2>
    <p>${Engineer.id}</p>
    <p>${Engineer.email}</p>
    <p>${Engineer.github}</p>
    </div>`
};

const generateInternHTML = (Intern) => {
    return `<div>
    <h2>${Intern.name}</h2>
    <p>${Intern.id}</p>
    <p>${Intern.email}</p>
    <p>${Intern.school}</p>
</div>`
};

const generateTeam = (teamArray) => {
    var cards = ""
    for (let i = 0; i < teamArray.length; i++) {
        if (teamArray[i].getRole() == "Manager") {
            cards += generateManagerHTML(teamArray[i])
        } else
            if (teamArray[i].getRole() == "Engineer") {
                cards += generateEngineerHTML(teamArray[i])
            } else {
                cards += generateInternHTML(teamArray[i])
            }
    }
    var htmlString = `
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  </head>
  <body>
    <h1>Team Profile</h1>
    ${cards}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </body>
</html>
    `
    return htmlString;
}
module.exports = {
    generateInternHTML,
    generateEngineerHTML,
    generateManagerHTML,
    generateTeam
}