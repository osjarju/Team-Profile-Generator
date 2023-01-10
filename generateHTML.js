const script = require('./script');

function generateManagerHTML(manager) {
    return `<div>
    <h2>${manager.name}</h2>
    <p>${manager.description}</p>
    </div>`
};

function generateEngineerHTML(manager) {
    return `<div>
    <h2>${engineer.name}</h2>
    <p>${engineer.description}</p>
    </div>`
};

function generateInternHTML(intern) {
    return `<div>
    <h2>${intern.name}</h2>
    <p>${intern.description}</p>
</div>`
};

