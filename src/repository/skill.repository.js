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

async function getSkillIdDB(_id) {
    const data = await TableSkill.find({ _id: new ObjectId(_id) });
    return data;
}

async function updateSkillDB(_id, skill) {
    await TableSkill.updateOne({ _id: new ObjectId(_id) }, { $set: skill });
    const data = await TableSkill.find();
    return data;
}

async function deleteSkillDB(_id) {
    await TableSkill.deleteOne({ _id: new ObjectId });

    const data = await TableSkill.find();
    return data;
}

module.exports = { createSkillDB, getAllSkillsDB, getSkillIdDB, updateSkillDB, deleteSkillDB };