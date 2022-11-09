'use strict';
// catRoutes
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//TODO: chain the router method calls
router.get('/', userController.getUsers);

router.get('/:userId', userController.getUser);

router.post('/', userController.createUser);
router.put('/', (req, res)=> {
    res.send('From this endpoint or location you can edit more users.')
    // TODO: replace with controller & data model
});
router.delete('/', (req, res)=> {
    res.send('From this endpoint or location you can delete more users.')
        // TODO: replace with controller & data model
});

module.exports = router;