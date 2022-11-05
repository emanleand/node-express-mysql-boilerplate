const httpStatusCodes = require('http-status-codes');

const {
  customersServices,
  customersDbContext
} = require('../../services');

const { mapOptionsContext: contextConfig } = require('../../mappers');

const getCustomers = async (_, res) => {
  try {
    const context = await customersDbContext.createContext(contextConfig.options);
    const result = await customersServices.getAllCustomer(context);

    res.status(httpStatusCodes.OK).send(result);
  } catch (error) {

    res.status(error.status).send({
      message: error.message
    });
  }
};

const getCustomersById = async (req, res) => {
  try {
    const context = await customersDbContext.createContext(contextConfig.options);
    const result = await customersServices.getOneCustomer(context, req.params.customerId);

    res.status(httpStatusCodes.OK).send(result);
  } catch (error) {

    res.status(error.status).send({
      message: error.message
    });
  }
}

const createCustomer = async (req, res) => {
  try {
    const context = await customersDbContext.createContext(contextConfig.options);
    const result = await customersServices.createOneCustomer(context, req.body);

    res.status(httpStatusCodes.OK).send({ insertId: result.insertId });
  } catch (error) {

    res.status(error.status).send({
      message: error.message
    });
  }
}


module.exports = {
  getCustomers,
  getCustomersById,
  createCustomer
};
