const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const route = require('../src/controller/user.controller');

app.use(bodyParser.json());
app.use('/user', route)
app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;