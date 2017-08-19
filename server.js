const express = require('express');
const hbs = require('hbs');
const path = require('path');

var app = express();
const publicPath = path.join(__dirname, '/');
app.use('/', express.static(publicPath));

const routes = require('./routes/index');
app.set('view engine', 'hbs');
app.use('/', routes);


app.listen('8000', () => {
  console.log('port is up and running at 8000');
});
