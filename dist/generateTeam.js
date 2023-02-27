
const generateManagerHTML = (Manager) => {
    return `<div>
    <h2>${Manager.name}</h2>
    <p>${Manager.email}</p>
    </div>`
};

const generateEngineerHTML = (Engineer) => {
    return `<div>
    <h2>${Engineer.name}</h2>
    <p>${Engineer.github}</p>
    </div>`
};

const generateInternHTML = (Intern) => {
    return `<div>
    <h2>${Intern.name}</h2>
    <p>${Intern.school}</p>
</div>`
};

module.exports = {
    generateInternHTML,
    generateEngineerHTML,
    generateManagerHTML
}