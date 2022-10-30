const uuid = require('uuid')
const config = require('config')
const createError = require('http-errors')

const getOneCustomer = async (db, id) => {
  const [result] = await db.query(
    `SELECT * FROM customerDB.customer WHERE customerId = ?`,
    [id]
  );

  validateResult(result);

  return result[0];
}

const validateResult = (result) => {

  if (!result.length) {
    throw createError.NotFound('customer not found');
  }

  return;
}

const getAllCustomer = async (db) => {
  const [result] = await db.query(
    `SELECT * FROM customerDB.customer`
  );

  return result;
}

module.exports = {
  getOneCustomer,
  getAllCustomer
}