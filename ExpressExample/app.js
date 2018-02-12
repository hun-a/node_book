const express = require('express')
    , http = require('http');
const app = express();

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server is running on ${app.get('port')}`);
});