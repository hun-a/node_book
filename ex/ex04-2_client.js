const net = require('net');
const readline = require('readline');

const client = new net.Socket();
client.connect(3000, 'localhost', () => {
  console.log('connected');
});

client.on('data', data => {
  console.log(`Server: ${data}`);
});

client.on('close', () => {
  console.log('Connection closed');
  process.exit(0);
});

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const exit = ['exit', 'close', 'quit'];
read.on('line', line => {
  if (exit.includes(line)) {
    read.close();
    process.exit(0);
  }
  client.write(line);
});