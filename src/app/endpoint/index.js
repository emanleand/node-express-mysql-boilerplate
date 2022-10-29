/**
 * Required modules.
 */
const express = require('express');

const customersRoutes = require('./customers/customers.route');

const router = express.Router();

router.use('/', customersRoutes);

module.exports = router;
