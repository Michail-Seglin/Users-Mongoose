const express = require('express');
const routeSkill = express.Router();
const {createSkill} = require('../repository/skill.repository')

routeSkill.post('/', async (req,res)=>{
    try{
const data = await createSkill(req.body);
res.send(data);
    }catch(error){
        res.send(error.message)
    }
})

module.exports = routeSkill;
