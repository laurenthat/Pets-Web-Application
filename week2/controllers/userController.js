'use strict';
const userModel = require('../models/userModel');

const getUsers = (req, res) => {
    //next line removes the password property from the array when we request data about users;
    userModel.users.map(user => {
        delete user.password;
        return user;
    });
    res.json(userModel.users);
};

const getUser = (req, res) => {
    //res.send('From this endpoint you can get cat with id ' + req.params.catId)
    const user = userModel.users.filter(user => req.params.userId == user.id)[0];
    // the [0] is there so it returns only the object of the array with matching id
    //the if is used in the case the user tries to reach a cat that does not exist. We send a 404 error
    if (user) {
        //delete the password for a user based on id;
        delete user.password;
        res.json(user);
    } else {
        res.sendStatus(404);
        //or we can add some message;
    }
    // this lower version does not work since it uses the index and not the id
    // res.json(catModel.cats[req.params.catId-1]);
};

const createUser = (req, res)=> {
    // console.log(req.body);
    const userInfo = `username: ${req.body.name}, email: ${req.body.email}`;
    res.send('Adding new user' + userInfo);
};



const modifyUser = (req, res) => {};
const deleteUser = (req, res) => {};
module.exports = {
    getUser,
    getUsers,
    modifyUser,
    createUser,
    deleteUser
};
