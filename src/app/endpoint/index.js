/**
 * Required modules.
 */
const express = require('express');

const customersRoutes = require('./customers/customers.route');
const healthCheckRoutes = require('./healthCheck/healthCheck.route');

const router = express.Router();

router.use('/', customersRoutes);
router.use('/', healthCheckRoutes);

module.exports = router;
