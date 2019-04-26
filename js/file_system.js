// File System Module
const fs = require('fs');
// const filesSync = fs.readdirSync('./');

// Always prefer Asynchronus methods
const files = fs.readdir('./', (err, files) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Result', files);
  }
});
