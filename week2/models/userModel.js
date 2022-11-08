'use strict';
//this is the version works when we have the list in our project, rather than in a database.
// const users = [
//   {
//     id: '1',
//     name: 'John Doe',
//     email: 'john@metropolia.fi',
//     password: '1234',
//   },
//   {
//     id: '2',
//     name: 'Jane Doez',
//     email: 'jane@metropolia.fi',
//     password: 'qwer',
//   },
// ];

const pool = require("../database/db");
const promisePool = pool.promise();

const getAllUsers = async (res) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    // WHERE wop_cat.owner = wop_user.user_id
    const [rows] = await promisePool.query("SELECT user_id, name, email, role FROM wop_user");
    return rows;
  } catch (e) {
    res.status(500).send(e.message);
    console.error("error", e.message);
  }
};

const getUserById = async (res, userId) => {
  try {
    const [rows] = await promisePool.query("SELECT user_id, name, email, role FROM wop_user WHERE user_id = ?", [userId]);
    return rows[0];
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const addUser = async (user, res) => {
  try {
    const sql = "INSERT INTO wop_user VALUES (null, ?, ?, ?, ?)";
    const values =[user.name, user.email, user.password, user.role];
    const [result] = await promisePool.query(sql, values);
    return result.insertId;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};



module.exports = {
  getAllUsers,
  getUserById,
  addUser
};
