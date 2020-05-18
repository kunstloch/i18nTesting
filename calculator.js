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
  updateFiles: true,
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

// using variables in i18n


// i18n used on backend
app.post('/', function(req, res) {

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  
  today = dd + '.' + mm + '.' + yyyy;
  console.log(today);

  let bla = '';
  let result = Number(req.body.num1) + Number(req.body.num2);
  const greeting = res.__('The calculation is ');
  res.send(greeting + result + ". " +res.__('today_is_{{today}}', { today: today }));
});
