const fs = require('fs');

fs.mkdir('./docs', 0666, err => {
  if (err) throw err;
  console.log('created new dir: docs');

  fs.rmdir('./docs', err => {
    if (err) throw err;
    console.log('deleted dir: docs');
  });
});