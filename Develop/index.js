const fs = require( 'fs' )
const inquirer = require( 'inquirer' );
const Choices = require('inquirer/lib/objects/choices');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of project:'
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Project description:'
    },
    {
        type: 'input',
        name: 'inst',
        message: 'Installation notes:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage notes:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your License:',
        choices: ['MIT','GNU GPL v3']
    },
    {
        type: 'input',
        name: 'contr',
        message: 'Enter contributing members:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test notes:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your email:'
    }

];
// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFileSync( 'CONTRIBUTORS.md',
//     `------------------------------------------
// #${questions.title}

// ${questions.desc}` )
// }

// function to initialize program
async function init() {
    const setup = await inquirer.prompt(questions);
    if (setup.license == 'MIT'){
        const pick = 'MIT License';
    }
    else{
        const pick = 'GNU GPL v3';
    }
    console.log(
        `#${setup.title}\n${setup.desc}\n`+
        `##Installation\n${setup.inst}\n`+
        `##Usage\n${setup.usage}\n`+
        `##License\n${setup.license}\n`+
        `##Contributing\n${setup.contr}\n`+
        `##Tests\n${setup.tests}\n`+
        `##Questions\n<https://github.com/${setup.github}>\nReach me with additional questions at: <${setup.email}>`
    );

}

// function call to initialize program
init();

// Title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions