const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8000;
const publicPath = path.join(__dirname, '/');
app.use('/', express.static(publicPath));

app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));



const routes = require('./routes/index');
app.set('view engine', 'hbs');
app.use('/', routes);


app.listen(port, () => {
  console.log('port is up and running at 8000');
});
