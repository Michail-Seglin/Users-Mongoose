const { createUserDB, getAllUsersDB, getUserIdDB, updateUserDB, deleteUserDB } = require("../repository/user.repository");

async function createUser(user) {
    const data = await createUserDB(user);
    return data;
}

async function getAllUsers() {
    const data = await getAllUsersDB();
    return data;
}

async function getUserId(_id) {
    const data = await getUserIdDB(_id);
    return data;
}


async function updateUser(_id, user) {
    const data = await updateUserDB(_id, user);
    return data;
}

async function deleteUser(_id) {
    const data = await deleteUserDB(_id);
    return data;
}

module.exports = { createUser, getAllUsers, getUserId, updateUser, deleteUser };