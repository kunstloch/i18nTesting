const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, function() {
  console.log('Server started on PORT ' + PORT);
  console.log('Nodejs version is ' + process.version);
  console.log('Press Ctrl+C to quit.');
});

app.get('/', function(req, res) {
  res.render('index');
});
