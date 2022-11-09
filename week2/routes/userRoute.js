'use strict';
// catRoutes
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//TODO: chain the router method calls
router.get('/', userController.getUsers)
    .get('/:userId', userController.getUser)
    .post('/', userController.createUser)
    .put('/', userController.modifyUser)
    .put('/:userId', userController.modifyUser)
    .delete('/:userId', userController.deleteUser);

module.exports = router;