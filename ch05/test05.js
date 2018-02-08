const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer();
server.listen(port, () => {
  console.log(`Server is running on ${port}!`);
});

server.on('request', (req, res) => {
  console.log('requested from client');

  const filename = path.join(__dirname, 'up.gif');
  fs.readFile(filename, (err, data) => {
    if (err) throw err;

    res.writeHead(200, {'Content-Type': 'image/gif'});
    res.write(data);
    res.end();
  })
});

server.on('close', () => {
  console.log('Server will be closed!');
});