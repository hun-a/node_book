const fs = require('fs');

const infile = fs.createReadStream('./output.txt', {flags: 'r'});
const outfile = fs.createWriteStream('./output2.txt', {flags: 'w'});

infile.on('data', (data) => {
  console.log({data});
  outfile.write(data);
});

infile.on('end', () => {
  console.log('Complete reading file');
  outfile.end(() => {
    console.log('Complete writing file');
  });
});