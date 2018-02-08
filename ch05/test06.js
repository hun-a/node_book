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
  const infile = fs.createReadStream(filename, {flags: 'r'});
  let filelength = 0;
  let curlength = 0;

  fs.stat(filename, (err, stat) => {
    if (err) throw err;
    filelength = stat.size;
  });

  res.writeHead(200, {'Content-Type': 'image/gif'});

  infile.on('readable', () => {
    let chunk;
    while (null !== (chunk = infile.read())) {
      console.log(`read size: ${chunk.length} byte`);
      curlength += chunk.length;
      res.write(chunk, 'utf8', err => {
        console.log(`Writing complete! ${curlength}/${filelength}`);
        if (curlength >= filelength) {
          res.end();
        }
      });
    }
  })
});

server.on('close', () => {
  console.log('Server will be closed!');
});