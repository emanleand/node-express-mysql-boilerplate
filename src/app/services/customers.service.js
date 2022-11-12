const createError = require('http-errors');

const validateResult = (result) => {
  if (!result.length) {
    throw createError.NotFound('customer not found');
  }
};

const getOneCustomer = async (db, id) => {
  try {
    const [result] = await db.query(
      'SELECT * FROM salesSystemsDB.customer WHERE customerId = ?',
      [id]
    );

    validateResult(result);

    return result[0];
  } catch (error) {
    console.log(error);
    throw createError.ServiceUnavailable();
  }
};

const getAllCustomer = async (db) => {
  try {
    const [result] = await db.query(
      'SELECT * FROM salesSystemsDB.customer'
    );

    return result;
  } catch (error) {
    console.log(error);
    throw createError.ServiceUnavailable();
  }
};

const createOneCustomer = async (db, body) => {
  try {
    const [result] = await db.query(
      'INSERT INTO salesSystemsDB.customer (firstName, lastName, email) VALUES (?, ?, ?)',
      [body.firstName, body.lastName, body.email]
    );

    return result;
  } catch (error) {
    console.log(error);
    throw createError.ServiceUnavailable();
  }
};

module.exports = {
  getOneCustomer,
  getAllCustomer,
  createOneCustomer
};
