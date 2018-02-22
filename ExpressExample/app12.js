const express = require('express')
    , http = require('http')
    , cookieParser = require('cookie-parser')
    , expressSession = require('express-session')
    , bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
  secret: 'my key',
  resave: true,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  res.redirect('/process/product');
});

app.get('/process/product', (req, res) => {
  console.log('requested /process/product');

  if (req.session.user) {
    res.redirect('/product.html');
  } else {
    res.redirect('/login2.html');
  }
});

app.post('/process/login', (req, res) => {
  console.log('requested /process/login');

  const id = req.body.id || req.query.id;
  const password = req.body.password || req.query.password;

  if (req.session.user) {
    console.log('Already logged in!');
    res.redirect('/process/product');
  } else {
    req.session.user = {
      id,
      name: 'seunghun',
      authorized: true
    };

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Login succeed!</h1>');
    res.write(`<div><p>Param id: ${id}</p></div>`);
    res.write(`<div><p>Param password: ${password}</p></div>`)
    res.write(`<br><br><a href='/process/product'>Go to the Product page</a>`);
    res.end();
  }
});

app.get('/process/logout', (req, res) => {
  console.log('requested /process/logout');

  if (req.session.user) {
    console.log('You will log out.');

    req.session.destroy(err => {
      if (err) {
        throw err
      };

      console.log('Session was destroyed and logged out.');
      res.redirect('/login2.html');
    });
  } else {
    console.log('Not logged in!');
    res.redirect('/login2.html');
  }
});

http.createServer(app).listen(port, () => {
  console.log(`Server is running on ${port}`);
});