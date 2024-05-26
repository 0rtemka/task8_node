const express = require('express');
const { userService } = require('../service/userService');
const router = express.Router();

router.get('/users', (req, res) => {
    res.send(userService.getAll());
})

router.get('/users/sorted', (req, res) => {
    res.send(userService.getAll(sort=true));
})

router.get('/users/age/:age', (req, res) => {
    let {age} = req.params;
    res.send(userService.getByAge(parseInt(age)));
})

router.get('/users/domain/:domain', (req, res) => {
    const {domain} = req.params;
    res.send(userService.getByDomain(domain));
})

router.get('/users/:id', (req, res) => {
    const {id} = req.params;
    res.send(userService.getById(id));
})

router.post('/users', (req, res) => {
    const user = req.body;
    res.status(201).send(userService.add(user));
})

router.put('/users/:id', (req, res) => {
    const user = req.body;
    const {id} = req.params;
    res.send(userService.update(user, id));
})

router.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    userService.delete(id);
    res.status(204).send()
})

module.exports.userRouter = router;