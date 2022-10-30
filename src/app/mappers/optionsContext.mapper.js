const config = require('config');

const options = config.get('services.customer.db') ?? {};

module.exports = {
  options: {
    host: process.env.CUSTOMER_HOST ?? options.host,
    port: process.env.CUSTOMER_PORT ?? options.port,
    user: process.env.CUSTOMER_USER ?? options.user,
    password: process.env.CUSTOMER_PASSWORD ?? options.password,
    database: process.env.CUSTOMER_DATABASE ?? options.database,
  },
};
