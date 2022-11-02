'use strict';
// catRoutes
const express = require('express');
const router = express.Router()
const catController = require('../controllers/catController');

router.get('/', catController.getCats);

router.get('/:catId', catController.getCat);

router.post('/', (req, res)=> {
    res.send('From this endpoint or location you can add more cats.')
});
router.put('/', (req, res)=> {
    res.send('From this endpoint or location you can edit more cats.')
});
router.delete('/', (req, res)=> {
    res.send('From this endpoint or location you can delete more cats.')
});

module.exports = router;