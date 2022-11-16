'use strict';
// catRoutes
const express = require('express');
const router = express.Router();
const {body} = require('express-validator')
const userController = require('../controllers/userController');

//TODO: chain the router method calls
router.get('/', userController.getUsers)
    .get('/:userId', userController.getUser)
    .post('/', 
        body('name').isLength({min: 3}).trim().escape(),
        body('email').isEmail().normalizeEmail(),
        body('passwd').isLength({min: 8}).trim(),
        userController.createUser)

    .put('/', userController.modifyUser)
    .put('/:userId', userController.modifyUser)
    .delete('/:userId', userController.deleteUser);

module.exports = router;