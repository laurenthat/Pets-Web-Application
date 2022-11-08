'use strict';
const catModel = require('../models/catModel');

const getCats = async (req, res) => {
    const cats = await catModel.getAllCats(res);
    res.json(cats);
};

const getCat = async (req, res) => {
    //res.send('From this endpoint you can get cat with id ' + req.params.catId)
    const cat = await catModel.getCatById(res, req.params.catId);
    // the [0] is there so it returns only the first object of the array with matching id
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

const createCat = async (req, res) => {
    const cat = req.body;
    cat.filename = req.file.filename;
    console.log('creating a new cat:', cat);
    const catId = await catModel.addCat(cat);
    res.status(201).json({catId: catId}); //or we can just write ({catId}) since we created the const catId
};

const modifyCat = (req, res) => {};

const deleteCat = async (req, res) => {
    const result =  await catModel.deleteCatById(req.params.catId, res);
    console.log ('cat deleted', result);
    if (result.affectedRows > 0) {
        res.json({message: 'cat deleted'});
    } else  {
        res.status(404).json({message: 'cat was already deleted'});
    }
};

module.exports = {
    getCat,
    getCats,
    modifyCat,
    createCat,
    deleteCat
};
