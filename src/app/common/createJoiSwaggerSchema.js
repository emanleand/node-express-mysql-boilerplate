const joi = require('@hapi/joi');

const generatedJoiSchemas = {};

/**
 * Creates a new Joi object that will be transformed to a new swagger schema
 * @param {String} className the Schema keyname
 * @param {Object} schema an plain javascript Object containing Joi elements
 * @example
 */

const createSchema = (className, schema) => {
  try {
    Object.keys(schema).forEach((key) => {
      if (!joi.isSchema(schema[key])) {
        throw new Error(`Property ${key} must be an instance of Joi`);
      }
    });
    const joiSchema = joi.object().keys(schema).meta({ className });
    generatedJoiSchemas[className] = joiSchema;
    return joiSchema;
  } catch (error) {
    throw error;
  }
};

module.exports = { createSchema, generatedJoiSchemas };
