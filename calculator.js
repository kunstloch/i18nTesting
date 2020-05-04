const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const i18n = require('i18n');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

app.use(i18n.init);

// Configure i18n, after first run set updateFiles to false
i18n.configure({
  locales: ['en', 'de'],
  directory: path.join(__dirname, 'locales'),
  objectNotation: true,
  updateFiles: false,
  register: global
});

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

// i18n ûsed on backend
app.post('/', function(req, res) {
  let bla = '';
  let result = Number(req.body.num1) + Number(req.body.num2);
  const greeting = res.__('The calculation is ');
  res.send(greeting + result);
});
