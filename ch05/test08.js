const http = require('http');

const opts = {
  host: 'www.google.com',
  port: 80,
  path: '/',
  headers: {}
};

let resData = '';
let req = http.request(opts, res => {
  res.on('data', chunk => {
    resData += chunk;
  });

  res.on('end', () => {
    console.log(resData);
  });
});

opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
req.data = 'q=actor';
opts.headers['Content-Length'] = req.data.length;

req.on('error', err => {
  console.log(err);
});

req.write(req.data);
req.end();