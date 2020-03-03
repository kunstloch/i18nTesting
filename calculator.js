const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

const PORT = 3000;

app.listen(PORT, function() {
  console.log('Server started on PORT ' + PORT);
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
