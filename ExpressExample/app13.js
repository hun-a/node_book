// Basic module for express
const express = require('express')
    , http = require('http')
    , path = require('path');

// The middleware of express
const bodyParser = require('body-parser');

// File uploading middleware
const multer = require('multer')
    , fs = require('fs');

// Supporting multi-server-connection when ajax request by client
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3000);

// Parsing for application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:false }));
// Parsing for application/json
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('uploads'));

// supporting multi-server-connection
// when ajax requested by clients
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname + Date.now());
  }
});

const upload = multer({
  storage,
  limits: {
    files: 10,
    fileSize: 1024 * 1024 * 1024
  }
});

app.post('/process/photo', upload.array('photo'), (req, res) => {
  console.log('requested /process/photo');

  try {
    const files = req.files;

    console.dir(`#===== first file's information =====#`);
    console.dir(req.files);
    console.dir('#=====#');

    let originalname = '',
        filename = '',
        mimetype = '',
        size = 0;

    console.log(`file count is ${files.length}`);

    for (let i = 0; i < files.length; i++) {
      originalname = files[i].originalname;
      filename = files[i].filename;
      mimetype = files[i].mimetype;
      size = files[i].size;
    }

    console.log(`file's information: `, {originalname, filename, mimetype, size});

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write(`<h1>Uploading succeed!</h1>`);
    res.write(`<hr/>`);
    res.write(`<p>original name: ${originalname} -> saved name: ${filename}</p>`)
    res.write(`<p>mime type: ${mimetype}</p>`);
    res.write(`<p>size: ${size}</p>`);
    res.end();
  } catch(err) {
    console.log(err);
  }
});

app.get('/', (req, res) => {
  res.redirect('/photo.html');
});

http.createServer(app).listen(app.get('port'), () => {
  console.log('Server is running!');
});