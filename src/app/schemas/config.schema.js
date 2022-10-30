const joi = require('joi');

const configSchema = joi.object({
  host: joi.string().hostname().required(),
  user: joi.string().required(),
  password: joi.string().required(),
  database: joi.string().default('salesSystemsDB'),
  port: joi.number().integer().default(3306),
  decimalNumbers: joi.bool().default(true),
});

module.exports = { configSchema };
