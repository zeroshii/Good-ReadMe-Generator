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
        choices: ['MIT','GPLv3', 'Apache', 'ISC']
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


// function to initialize program
async function init() {
    const setup = await inquirer.prompt(questions);

// write README file
     fs.writeFileSync('GOODREADME.md',
        `# ${setup.title}\n`+
        `![License](https://img.shields.io/badge/license-${setup.license}-blue.svg "License Badge")\n`+
        `## Description\n${setup.desc}\n`+
        `## Table of Contents\n`+

        `- [Installation](#installation)\n`+
        `- [Usage](#usage)\n`+
        `- [License](#license)\n`+
        `- [Contributing](#Contributing)\n`+
        `- [Tests](#tests)\n`+
        `- [Questions](#questions)\n`+
        
        `## Installation\n${setup.inst}\n`+
        `## Usage\n${setup.usage}\n`+
        `## License\nCopyright, 2020, Garman Kwan\n`+
        `\n${setup.license}:\nFor more information on license and use, please visit: <https://opensource.org/licenses/category>\n`+
        `## Contributing\n${setup.contr}\n`+
        `## Tests\n${setup.tests}\n`+
        `## Questions\nVisit my [GitHub](https://github.com/${setup.github}) page or send your questions by email: <${setup.email}>`
    );

}

// function call to initialize program
init();