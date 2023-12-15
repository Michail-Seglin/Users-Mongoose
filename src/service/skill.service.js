const { createSkillDB, getAllSkillsDB } = require('../repository/skill.repository');

async function createSkill(skill) {
    const data = await createSkillDB(skill);
    return data;
}

async function getAllSkills() {
    const data = await getAllSkillsDB();
    return data;
}

module.exports = { createSkill, getAllSkills }