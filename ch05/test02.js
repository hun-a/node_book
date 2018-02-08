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
  console.dir(req);
});

server.on('close', () => {
  console.log('Server will be terminated');
});