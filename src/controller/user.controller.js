const express = require('express');
const { createUser, getAllUsers, getUserId, updateUser, deleteUser } = require("../service/user.service");
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const data = await createUser(req.body);
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
})

route.get('/', async (req, res) => {
    try {
        const data = await getAllUsers();
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
})

route.get('/:_id', async (req, res) => {
    try {
        const data = await getUserId(req.params._id);
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
})

route.put('/:_id', async (req, res) => {
    try {

        const data = await updateUser(req.params._id, req.body);
        res.send(data);

    } catch (error) {
        res.send(error.message)

    }
})

route.delete('/:_id', async (req, res) => {
    try {
        const data = await deleteUser(req.params._id);
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = route;