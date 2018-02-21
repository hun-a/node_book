const express = require('express')
    , http = require('http')
    , path = require('path')
    , bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/process/login/:name', (req, res, next) => {
  const paramName = req.params.name;
  const paramId = req.body.id || req.query.id;
  const paramPassword = req.body.password || req.query.password;

  res.writeHead('200', {'Content-Type':'text/html;charset=utf-8'});
  res.write('<h1>Response from Express server</h1>');
  res.write(`<div><p>Param name: ${paramName}</p></div>`);
  res.write(`<div><p>Param ID: ${paramId}</p></div>`);
  res.write(`<div><p>Param password: ${paramPassword}</p></div>`);
  res.write(`<br><a href='/login3.html'>go back to the login page</a>`);
  res.end();
});

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server is running ${app.get('port')}`);
});