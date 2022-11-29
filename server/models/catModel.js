'use strict';
// const cats = [
//   {
//     id: '1',
//     name: 'Frank',
//     birthdate: '2010-10-30',
//     weight: '5',
//     owner: '1',
//     filename: 'http://placekitten.com/400/300',
//   },
//   {
//     id: '2',
//     name: 'James',
//     birthdate: '2015-12-25',
//     weight: '11',
//     owner: '2',
//     filename: 'http://placekitten.com/400/302',
//   },
// ];

const pool = require("../database/db");
const { addUser } = require("./userModel");
const promisePool = pool.promise();

const getAllCats = async (res) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    // WHERE wop_cat.owner = wop_user.user_id
    const sql = "SELECT wop_cat.cat_id, wop_cat.name, wop_cat.weight, wop_user.name as owner_name, wop_cat.filename, wop_cat.birthdate FROM wop_cat INNER JOIN wop_user ON wop_cat.owner = wop_user.user_id;";
    const [rows] = await promisePool.query(sql);
    return rows;
  } catch (e) {
    res.status(500).send(e.message);
    console.error("error", e.message);
  }
};

const getCatById = async (res, catId) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM wop_cat WHERE cat_id = ?", [catId]);
    return rows[0];
  } catch (e) {
    res.status(500).send(e.message);
    console.error("error", e.message);
  }
};

const addCat = async (cat, res) => {
  try {
    const sql = "INSERT INTO wop_cat VALUES (null, ?, ?, ?, ?, ?)";
    const values =[cat.name, cat.weight, cat.owner, cat.filename, cat.birthdate];
    const [result] = await promisePool.query(sql, values);
    return result.insertId;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const deleteCatById = async (catId, owner, role, res) => {
  try {
    if (role === 0) {
    const [rows] = await promisePool.query("DELETE FROM wop_cat WHERE cat_id = ?", [catId]);
    return rows;
    } else {
      const [rows] = await promisePool.query("DELETE FROM wop_cat WHERE cat_id = ? AND owner = ?", [catId, owner]);
      return rows;
    }

  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

// const deleteCatById = async (catId, owner, res) => {
//   try {
//     const [rows] = await promisePool.query("DELETE FROM wop_cat WHERE cat_id = ? AND owner = ?", [catId, owner]);
//     return rows;
//   } catch (e) {
//     console.error("error", e.message);
//     res.status(500).send(e.message);
//   }
// };

const updateCatById = async (cat, res) => {
  try {
    console.log('modifying cat', cat);
    const sql = 'UPDATE wop_cat SET name = ?, weight = ?, owner = ?, birthdate = ? WHERE cat_id = ?';
    const values = [cat.name, cat.weight, cat.owner, cat.birthdate, cat.id];
    const [rows] = await promisePool.query(sql, values);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

module.exports = {
  getAllCats,
  getCatById,
  addCat,
  deleteCatById,
  updateCatById
};
