// Function to return a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `https://img.shields.io/github/license/:user/:repo?color=blue&label=${license}`;
  }
  return "";
}

// Function to return the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `[License](#license)`;
  }
  return "";
}

// Function to return the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
${license} license`;
  }
  return "";
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Instructions](#instructions)
* [Contributions](#contributions)
* [Usage](#usage)
* [Installation](#installation)
* [Test](#test)
${renderLicenseLink(data.license)} 
# Title
${data.title}
## Description
${data.description}
## Instructions
${data.instructions}
## Contributions
${data.contributions}
## Usage
${data.usage}
## Installation
${data.installation}
## Test
${data.test}
${renderLicenseSection(data.license)} 
`;
}

module.exports = generateMarkdown;
