const { createSkillDB } = require('../repository/skill.repository');

await function createSkill(skill) {
    const data = await createSkillDB(skill);
    return data;
}

module.exports = { createSkill }