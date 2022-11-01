'use strict';
// catRoutes
const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    //console.log(req)
    res.send('From this endpoint you can get users.')
});
router.get('/:userId', (req, res) => {
    // console.log(req.params)
    res.send('From this endpoint you can get user with id ' + req.params.catId)
});
router.post('/', (req, res)=> {
    res.send('From this endpoint or location you can add more users.')
});
router.put('/', (req, res)=> {
    res.send('From this endpoint or location you can edit more users.')
});
router.delete('/', (req, res)=> {
    res.send('From this endpoint or location you can delete more users.')
});

module.exports = router;