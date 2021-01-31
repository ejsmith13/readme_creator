// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
      break;
    case 'BSD 2-Clause License':
      return `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`
      break;
    case 'GNU GPL v2':
      return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
      break;
    case 'MIT':
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
      break;
    case 'Mozilla':
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
      break;
    default:
      return " "
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0'
      break;
    case 'BSD 2-Clause License':
      return `https://opensource.org/licenses/BSD-2-Clause`
      break;
    case 'GNU GPL v2':
      return `https://www.gnu.org/licenses/old-licenses/gpl-2.0-faq.en.html`
      break;
    case 'MIT':
      return `https://opensource.org/licenses/MIT`
      break;
    case 'Mozilla':
      return `https://opensource.org/licenses/MPL-2.0`
      break;
    default:
      return " "
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license){
    case 'MIT':
      return `Copyright (c) 2021 Ethan Smith

      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.`
      break;
    default:
      return " "
  }
}

// TODO: Create a function to generate markdown for README
function createMarkdown(data) {
  
  const badge= renderLicenseBadge(data.license)
  const link= renderLicenseLink(data.license)
  const section= renderLicenseSection(data.license)

  const file= `# ${data.title}\n
  ${badge}\n
  My name is ${data.name} and I am ${data.age} years old\n
  ${link}\n
  ${data.name} ${section}\n`;
  return file
  
  ;
}

module.exports = {createMarkdown}


