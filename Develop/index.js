const fs = require( 'fs' )
const inquirer = require( 'inquirer' )

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
        type: 'number',
        name: 'license',
        message: 'Choose your License:'
    },
    {
        type: 'input',
        name: 'contr',
        message: 'Enter contributing members separated by commas:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test notes:'
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

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