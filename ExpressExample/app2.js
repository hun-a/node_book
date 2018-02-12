const express = require('express')
    , http = require('http');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log('Handle the request in first middleware');
  res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
  res.end('<h1>This page from the express server</h1>');
});

http.createServer(app).listen(port, () => {
  console.log(`Express server is running ${port}`);
});