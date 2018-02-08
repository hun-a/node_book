const http = require('http');
const port = 3000;
http.createServer().listen(port, () => {
  console.log(`Server is running on ${port}!`);
});