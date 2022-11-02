'use strict';
// catRoutes
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/', userController.getUsers);

router.get('/:userId', userController.getUser);

router.post('/', userController.createUser);
router.put('/', (req, res)=> {
    res.send('From this endpoint or location you can edit more users.')
});
router.delete('/', (req, res)=> {
    res.send('From this endpoint or location you can delete more users.')
});

module.exports = router;