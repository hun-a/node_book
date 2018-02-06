const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
  const instream = fs.createReadStream('./index.html');
  instream.pipe(res);
});

server.listen(3000, 'localhost');