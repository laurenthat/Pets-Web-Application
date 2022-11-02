'use strict';
const catModel = require('../models/catModel');

const getCats = (req, res) => {
    res.json(catModel.cats);
};

const getCat = (req, res) => {
    //res.send('From this endpoint you can get cat with id ' + req.params.catId)
    const cat = catModel.cats.filter(cat => req.params.catId == cat.id)[0];
    // the [0] is there so it returns only the object of the array with matching id
    //the if is used in the case the user tries to reach a cat that does not exist. We send a 404 error
    if (cat) {
        res.json(cat);
    } else {
        res.sendStatus(404);
        //or we can add some message;
    }
    // this lower version does not work since it uses the index and not the id
    // res.json(catModel.cats[req.params.catId-1]);
};

const createCat = (req, res) => {
    console.log(req.body);
    res.send('Adding a cat')
};

const modifyCat = (req, res) => {};
const deleteCat = (req, res) => {};

module.exports = {
    getCat,
    getCats,
    modifyCat,
    createCat,
    deleteCat
};
