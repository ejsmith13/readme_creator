const fs= require('fs');
const link= 'https://opensource.org/licenses/Apache-2.0'

fs.writeFile("test.md", link, (err) =>
err ? console.error(err): console.log("worked"))