const fs = require('fs');
let c = fs.readFileSync('main.js', 'utf8');

const anchor1 = 'const statuses = ["Not Contacted", "In Contact", "Successful", "Unsuccessful",';
const start = c.indexOf(anchor1);

const anchor2 = '    const statusOptions = statuses.map';
const end = c.indexOf(anchor2);

if (start > -1 && end > -1) {
    // Replace everything between the bad statuses array start and the statusOptions line
    const fixedStatuses = 'const statuses = ["Not Contacted", "In Contact", "Successful", "Unsuccessful"];\n';
    c = c.substring(0, start) + fixedStatuses + c.substring(end);
    fs.writeFileSync('main.js', c);
    console.log('Fixed statuses array in main.js');
} else {
    console.log('Not found');
    console.log('Start Index:', start);
    console.log('End Index:', end);
}
