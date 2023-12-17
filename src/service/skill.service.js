const { createSkillDB, getAllSkillsDB, getSkillIdDB, deleteSkillDB } = require('../repository/skill.repository');

async function createSkill(skill) {
    const data = await createSkillDB(skill);
    return data;
}

async function getAllSkills() {
    const data = await getAllSkillsDB();
    return data;
}

async function getSkillId(_id) {
    const data = await getSkillIdDB(_id);
    return data;
}

async function deleteSkill(_id) {
    const data = await deleteSkillDB(_id);
    return data;
}

module.exports = { createSkill, getAllSkills, getSkillId, deleteSkill }