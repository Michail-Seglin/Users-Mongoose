const { TableSkill, ObjectId } = require('../db');

async function createSkillDB(skill) {
    await TableSkill.create(skill);
    const data = await TableSkill.find();
    return data;
}

async function getAllSkillsDB() {
    const data = await TableSkill.find();
    return data;
}

module.exports = { createSkillDB, getAllSkillsDB };