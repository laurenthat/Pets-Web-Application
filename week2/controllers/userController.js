'use strict';
const userModel = require('../models/userModel');


const getUsers = async (req, res) => {
    const users = await userModel.getAllUsers(res);
    //next line removes the password property from the array when we request data about users;
    // users.map(user => {
    //     delete user.password;
    //     return user;
    // });
    res.json(users);
};

const getUser = async (req, res) => {
    //res.send('From this endpoint you can get cat with id ' + req.params.catId)
    const user = await userModel.getUserById(res, req.params.userId);
    // the [0] is there so it returns only the object of the array with matching id
    //the if is used in the case the user tries to reach a cat that does not exist. We send a 404 error
    if (user) {
        //delete the password for a user based on id;
        //delete user.password;
        res.json(user);
    } else {
        res.sendStatus(404);
        //or we can add some message;
    }
    // this lower version does not work since it uses the index and not the id
    // res.json(catModel.cats[req.params.catId-1]);
};

const createUser = async (req, res) => {
    console.log('creating new user:', req.body);
    const newUser = req.body;
    const result = await userModel.addUser(newUser, res);
    // const userInfo = `username: ${req.body.name}, email: ${req.body.email}`;
    res.status(201).json({userId: result});

};

const modifyUser = (req, res) => {
    //TODO: add functionality & data model
};
const deleteUser = (req, res) => {
        //TODO: add functionality & data model
};

module.exports = {
    getUser,
    getUsers,
    modifyUser,
    createUser,
    deleteUser
};
