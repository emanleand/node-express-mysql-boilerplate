const optionsContextSchema = require('./config.schema');
const customer = require('./customer.schema');

module.exports = {
  ...optionsContextSchema,
  ...customer
};
