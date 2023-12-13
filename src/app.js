const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routeUser = require('../src/controller/user.controller');
const routeSkill = require('../src/controller/skill.controller');


app.use(bodyParser.json());
app.use('/user', routeUser);
app.use('/skil', routeSkill); 
app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;