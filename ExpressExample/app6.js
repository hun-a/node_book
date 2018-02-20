const express = require('express')
    , http = require('http');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log('Handle the request in first middleware');

  const userAgent = req.header('User-Agent');
  const paramName = req.query.name;

  res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
  res.write('<h1>Response from Express server</h1>');
  res.write(`<div><p>User-Agent: ${userAgent}</p></div>`);
  res.write(`<div><p>Param name: ${paramName}</p></div>`);
  res.end();
});

http.createServer(app).listen(port, () => {
  console.log(`Express server is running ${port}`);
});