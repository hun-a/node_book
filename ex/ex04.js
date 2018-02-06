const fs = require('fs');
const readline = require('readline');
const filepath = './ex/ch04_input.txt';

const input = fs.createReadStream(filepath);

const rl = readline.createInterface({
  input,
  crlfDelay: Infinity
});

rl.on('line', line => {
  console.log(line.match(/\D+/)[0]);
});

input.on('data', data => {
  const tmp = Buffer.from(data).toString('utf8').match(/[a-z]+/g).join('\n');
  console.log(tmp);
});