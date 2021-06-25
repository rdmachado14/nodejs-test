const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const expressValidator = require('express-validator');

const app = express();

app.use(bodyParser.json());
app.use(expressValidator());

consign()
    .include('routes')
    .then('config/dbConnection.js')
    .into(app);

module.exports = app;
