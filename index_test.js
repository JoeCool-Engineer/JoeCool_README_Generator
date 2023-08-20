// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [['input','description', 'Enter a brief desription of this project.'],
['input', 'installation', 'Enter the installation instructions'],
['input', 'usage', 'Provide instructions and examples for use.'],
['input', 'contribution', 'Provide guidance on how to contribute to this project.'],
['input', 'test', 'How to run test for this project.'],
['input', 'licenseQues', 'Is there a license you would like to apply?'],
['list', 'selectLicense', 'Select the license you would like to apply.']];

const output = [];
// TODO: Create an array of questions for user input
for (const q of questions) {
  const obj = {
    type: 'input',
    name: q[0],
    message: q[1],
  };
  output.push(obj);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {} 

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



// Writing files
// fs.writeFile('./readMe.md', 'hello, world', () => {
//     console.log('file was written');
// })

// Directories
if(!fs.existsSync('./')){
fs.mkdir('./', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder & file created');
})}else {
    fs.rmdir('./', (err) => {
        if (err){
            console.log(err);
        }
        console.log('assets folder deleted');
    })
};


if (!fs.existsSync('./')){
    fs.writeFile('./README.md', Mango)
    fs.unlink('./deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}
