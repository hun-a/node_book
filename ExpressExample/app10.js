const express = require('express')
    , http = require('http');
const app = express();
const port = 3000;

app.get('/process/users/:id', (req, res) => {
  const paramId = req.params.id;

  res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
  res.write(`<h1>Response from Express server</h1>`);
  res.write(`<div><p>Param id: ${paramId}</p></div>`);
  res.end();
});

http.createServer(app).listen(port, () => {
  console.log(`Server is running on ${port}`);
});