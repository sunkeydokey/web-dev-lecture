const fs = require('fs');

function readFile() {
  try {
    const fileData = fs.readFileSync('data.json');
  } catch {
    console.log('Error occurred');
  }
  console.log('Hi');
}

readFile();
