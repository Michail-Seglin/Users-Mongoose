const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routeUser = require('../src/controller/user.controller');
const routeSkill = require('../src/controller/skill.controller');
const cors = require('cors');
const cookieParser = require('cookie-parser')


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(bodyParser.json());
app.user(cookieParser());
app.use('/user', routeUser);
app.use('/skill', routeSkill);
app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;