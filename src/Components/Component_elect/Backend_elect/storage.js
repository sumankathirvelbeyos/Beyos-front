const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'dataEntries.json');

function readDataEntries() {
    try {
        if (fs.existsSync(dataFilePath)) {
            const data = fs.readFileSync(dataFilePath, 'utf8');
            console.log('Data read from data.json:', data);
            return JSON.parse(data);
        } else {
            console.log('Data file does not exist.');
            return [];
        }
    } catch (error) {
        console.error('Error reading data file:', error);
        return [];
    }
}

function writeDataEntries(dataEntries) {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(dataEntries, null, 2), 'utf8');
        console.log('Data written to data.json:', dataEntries);
    } catch (error) {
        console.error('Error writing data file:', error);
    }
}

function getNextId() {
    const dataEntries = readDataEntries();
    return dataEntries.length > 0 ? Math.max(...dataEntries.map(entry => entry.id)) + 1 : 1;
}

module.exports = { readDataEntries, writeDataEntries, getNextId };
