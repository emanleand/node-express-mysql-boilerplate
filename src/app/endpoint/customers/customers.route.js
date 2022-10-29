const express = require('express');

const customersController = require('./customers.controller');

const router = express.Router();

router
  .route('/customers')
  .get(customersController.getCustomers);

module.exports = router;
