const net = require('net');

const server = net.createServer(socket => {
  socket.write('Echo server\n');
  socket.pipe(socket);
});

server.listen(3000, 'localhost', () => {
  console.log('server is running!');
});