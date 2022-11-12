const Mysql = require('mysql2/promise');
const createError = require('http-errors');

const { configSchema: optionsContextSchema } = require('../schemas');

const createContext = async (config = {}) => {
  let pool = null;
  try {
    const poolOptions = await optionsContextSchema.validateAsync(config);
    pool = Mysql.createPool(poolOptions);

    return pool;
  } catch (error) {
    console.error('There was an error connecting to the database');
    throw createError.BadGateway('Error: Connection to the DB');
  }
};

module.exports = {
  createContext
};
