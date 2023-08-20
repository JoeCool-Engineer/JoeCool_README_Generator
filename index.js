// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [['input','name', 'What is the title of this project?'],
['input','description', 'Enter a brief desription of this project.'],
['input', 'usage', 'Provide instructions and examples for use.'],
['input', 'contribution', 'Provide guidance on how to contribute to this project.'],
['input', 'test', 'How to run test for this project.'],
['list', 'license', 'Which license?', ['None', 'Mit', 'ISC', 'Mozilla']],
['list', 'color', 'Which color for the badge?', ['None', 'blue', 'red', 'yellow', 'green']]
];  

inquirer.prompt(questions.map((question) => ({
    type: question[0],
    name: question[1],
    message: question[2],
    choices: question[3],
})))
.then((userResponse) => { 
    console.log(userResponse) 
    const readMeContent = generateMarkdown(userResponse);

    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
})
