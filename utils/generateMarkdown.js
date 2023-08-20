// TODO: Create a function that returns a license badge based on which license is passed in
// Color Picker
function colorOptions(color) {
  if ( color !== "None") {
    return `${ color }.svg)`
  } else {
    return "inactive.svg)"
  }
}
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ( license !== "None") {
    return `![License](https://img.shields.io/badge/License-${ license }-`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ( license !== "None") {
    return `- [License](#license)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if ( license !== "None") {
    return `## License`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ name, description, usage, contribution, test, license, color }) {
  return `# ${ name }
  ${renderLicenseBadge(license)}${colorOptions(color)}

  ## Description
  ${ description }
  
  ## Table of Contents 

  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  ${renderLicenseLink(license)}
  
  ## Usage
  ${ usage }
  
  ## Contribution
  ${ contribution }
  
  ## Test
  ${ test }
  
  ${ renderLicenseSection(license) }

  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).`
  
  // `# ${data.title}`;
}

module.exports = generateMarkdown;
