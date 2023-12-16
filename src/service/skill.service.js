const { createSkillDB, getAllSkillsDB, deleteSkillDB } = require('../repository/skill.repository');

async function createSkill(skill) {
    const data = await createSkillDB(skill);
    return data;
}

async function getAllSkills() {
    const data = await getAllSkillsDB();
    return data;
}

async function deleteSkill(_id) {
    const data = await deleteSkillDB(_id);
    return data;
}

module.exports = { createSkill, getAllSkills, deleteSkill }