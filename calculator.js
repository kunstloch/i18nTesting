const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const i18n = require('i18n');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

app.use(i18n.init);

// Configure i18n
i18n.configure({
  locales: ['en', 'de'],
  directory: __dirname + '/locales',
  objectNotation: true,
  updateFiles: true
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

// app.get('/de', function(req, res) {
//   let greeting = res.__('The calculation is ');
// });

// app.get('/en', function(req, res) {
//   let greeting = res.__('The calculation is ');
// });

app.post('/', function(req, res) {
  let result = Number(req.body.num1) + Number(req.body.num2);
  let greeting = res.__('The calculation is ');
  res.send(greeting + result);
});
