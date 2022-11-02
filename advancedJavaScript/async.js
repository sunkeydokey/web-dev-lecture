const fs = require('fs/promises');

async function readFile() {
  let fileData;

  //   fileData = fs.readFile('data.txt', function (error, fileData) {
  //     console.log('File parsing Done!');
  //     console.log(fileData.toString());
  //   });
  try {
    fileData = await fs.readFile('data.txt');
  } catch (error) {
    console.log(error);
  }
  console.log('File parsing Done!');
  console.log(fileData.toString());

  console.log('Hi');
}

readFile();
