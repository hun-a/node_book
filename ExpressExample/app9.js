const express = require('express')
    , http = require('http')
    , path = require('path')
    , bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use((err, req, res, next) => {
  console.log(err.status, err);
  res.end();
});

app.all('*', (req, res, next) => {
  const error = new Error('404 Not Found Error');
  error.status = 404;
  next(error);
});

app.post('/process/login', (req, res, next) => {
  const paramId = req.body.id || req.query.id;
  const paramPassword = req.body.password || req.query.password;

  res.writeHead('200', {'Content-Type':'text/html;charset=utf-8'});
  res.write('<h1>Response from Express server</h1>');
  res.write(`<div><p>Param ID: ${paramId}</p></div>`);
  res.write(`<div><p>Param password: ${paramPassword}</p></div>`);
  res.end();
});

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server is running ${app.get('port')}`);
});