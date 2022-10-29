const express = require('express');

const healthCheckController = require('./healthCheck.controller');

const router = express.Router();

router
  .route('/health')
  .get(healthCheckController.health);

module.exports = router;
