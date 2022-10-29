const httpStatusCodes = require('http-status-codes');

const health = async (req, res) => {
  try {
    return res.status(httpStatusCodes.OK).send({ message: 'health' });
  } catch (error) {

    return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send('Internal Server Error!');
  }
};

module.exports = {
  health,
};
