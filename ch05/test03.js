const http = require('http');

const server = http.createServer();
const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

server.on('connection', socket => {
  const addr = socket.address();
  console.log(`${addr.address}:${addr.port} is connected!`);
});

server.on('request', (req, res) => {
  console.log('requested from client');
  
  res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
  res.write(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>respons page</title>
    </head>
    <body>
      <h1>Response page from Node.js</h1>
    </body>
  </html>
  `);
  res.end();
});

server.on('close', () => {
  console.log('Server will be terminated');
});