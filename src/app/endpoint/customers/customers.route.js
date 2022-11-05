const express = require('express');
const joiValidator = require('express-joi-validation').createValidator({});

const {
  customerBodySchema
} = require('../../schemas');

const customersController = require('./customers.controller');

const router = express.Router();

router
  .route('/customers')
  .get(customersController.getCustomers);

router
  .route('/customers/:customerId')
  .get(customersController.getCustomersById);

router
  .route('/customer')
  .post(
    joiValidator.body(customerBodySchema),
    customersController.createCustomer
  );  

module.exports = router;
