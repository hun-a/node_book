const fs = require('fs');

// write the data to file as async
fs.writeFile('./output.txt', 'Hello World!', err => {
    if (err) {
        console.log(`Error: ${err}`);
    }
    console.log('Complete the writing file');
});