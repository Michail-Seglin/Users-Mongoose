const express = require('express');
const routeSkill = express.Router();
const { createSkill, getAllSkills } = require('../service/skill.service');

routeSkill.post('/', async (req, res) => {
    try {
        const data = await createSkill(req.body);
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
})

routeSkill.get('/', async (req, res) => {
    try {
        const data = await getAllSkills();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

module.exports = routeSkill;
