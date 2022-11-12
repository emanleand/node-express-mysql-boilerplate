const joi = require('@hapi/joi');
const { createSchema } = require('../common/createJoiSwaggerSchema');

const customerBodySchema = createSchema('CustomerBody', {
  email: joi
    .string()
    .regex(/^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,4}$/) /* eslint-disable-line */
    .required()
    .messages({
      'string.base': 'email should be a string and email',
    }),
  firstName: joi
    .string()
    .required()
    .messages({
      'string.base': 'firstName param should be a string.',
    }),
  lastName: joi
    .string()
    .required()
    .messages({
      'string.base': 'lastName param should be a string.',
    }),
});

module.exports = {
  customerBodySchema
};
