// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Enter your project title.",
    },
    {
        type: "input",
        name: "description",
        message: "Enter ReadMe description."

    },
    {
        type: "input",
        name: "instructions",
        message: "Enter installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage instructions."
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter contribution guidlines."
    },
    {
        type: "input",
        name: "credits",
        message: "Enter people you would like to credit."
    },
    {
        type: "input",
        name: "test",
        message: "Enter test instructions."
    },
    {
        type: "list",
        name: "license",
        message: "Choose which license you would like to use.",
        choices: ["MIT", "ISC", "None"]
    },
    {
        type: "input",
        name: "gitHub",
        message: "Enter gitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Eneter your email address."
    },

])

    // Create a function to write README file
    .then((data) => {
        fs.writeFileSync("CreatedREADME.md", generateREADME(data))
    });

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(licenseChoice) {
    return (licenseChoice === "None") ? "" : `![${licenseChoice}](https://img.shields.io/badge/license-${licenseChoice}-brightgreen) \n`;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function licenseTOC(licenseChoice) {
    return (licenseChoice === "None") ? "" : `\n- [License](#license) `;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string

function licenseNotice(licenseChoice) {
    return (licenseChoice === "None") ? "" :
        ` \n ## License: 
        The license chosen was ${licenseChoice}. \n 
    `;
}

// Create a function to generate markdown for README
function generateREADME(data) {
    return `
    # Title: ${data.title}
      
    ${licenseBadge(data.license)}
    
    ## Description: 
        ${data.description}
    
    ## Table of Contents: 
    - [Description](#description) 
    - [Installation](#installation)
    - [Usage](#usage) 
    - [Credits](#credits) 
    - [Test](#test) ${licenseTOC(data.license)}
    - [Questions](#questions) 
    
    ## Installation: 
        ${data.instructions}
    
    ## Usage: 
        ${data.usage}
    
    ## Credits: 
        ${data.credits}
    
    ## Test: 
        ${data.test}
    ${licenseNotice(data.license)}

    ## Questions
    Contact me: \n
        -gitHub username: ${data.gitHub} \n
        -gitHub profile: https://github.com/${data.gitHub} \n
        -Email: ${data.email}
    
        `
}






