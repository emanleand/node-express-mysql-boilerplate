const httpStatusCodes = require('http-status-codes');

const getCustomers = async (req, res) => {
  try {
    return res.status(httpStatusCodes.OK).send({ message: 'all customers' });
  } catch (error) {

    return res.status(httpStatusCodes.BAD_REQUEST).send('Error verifying version!');
  }
};

module.exports = {
  getCustomers,
};
