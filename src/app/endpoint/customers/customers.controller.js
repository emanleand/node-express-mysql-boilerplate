const httpStatusCodes = require('http-status-codes');

const {
  customersServices,
  customersDbContext
} = require('../../services');

const { mapOptionsContext: contextConfig } = require('../../mappers');

const getCustomers = async (_, res, next) => {
  try {
    const context = await customersDbContext.createContext(contextConfig.options);
    const result = await customersServices.getAllCustomer(context);

    res.status(httpStatusCodes.OK).send(result);
  } catch (error) {
    next(error);
  }
};

const getCustomersById = async (req, res, next) => {
  try {
    const context = await customersDbContext.createContext(contextConfig.options);
    const result = await customersServices.getOneCustomer(context, req.params.customerId);

    res.status(httpStatusCodes.OK).send(result);
  } catch (error) {
    next(error);
  }
};

const createCustomer = async (req, res, next) => {
  try {
    const context = await customersDbContext.createContext(contextConfig.options);
    const result = await customersServices.createOneCustomer(context, req.body);

    res.status(httpStatusCodes.CREATED).send({ insertId: result.insertId });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCustomers,
  getCustomersById,
  createCustomer
};
