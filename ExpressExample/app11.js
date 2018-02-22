const express = require('express')
    , http = require('http')
    , cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
  res.redirect('/process/setUserCookie');
});

app.get('/process/showCookie', (req, res) => {
  console.log('requested /process/showCookies');
  res.send(req.cookies);
});

app.get('/process/setUserCookie', (req, res) => {
  console.log('requested /process/setUserCookie');

  res.cookie('user', {
    id: 'huna',
    name: 'seunghun',
    authorized: true
  });
  res.redirect('/process/showCookie');
});

http.createServer(app).listen(port, () => {
  console.log(`Server is running on ${port}`);
});