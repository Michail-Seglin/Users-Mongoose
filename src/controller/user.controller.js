const express = require('express');
const { createUser, getAllUsers, getUserId, updateUser, deleteUser } = require("../service/user.service");
const routeUser = express.Router();

routeUser.post('/', async (req, res) => {
    try {
        const data = await createUser(req.body);
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
})

routeUser.get('/', async (req, res) => {
    try {
        const data = await getAllUsers();
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
})

routeUser.get('/:_id', async (req, res) => {
    try {
        const data = await getUserId(req.params._id);
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
})

routeUser.put('/:_id', async (req, res) => {
    try {

        const data = await updateUser(req.params._id, req.body);
        res.send(data);

    } catch (error) {
        res.send(error.message)

    }
})

routeUser.delete('/:_id', async (req, res) => {
    try {
        const data = await deleteUser(req.params._id);
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = routeUser;