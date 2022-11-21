const httpStatusCodes = require('http-status-codes');
const httpMocks = require('node-mocks-http');

jest.mock('../../../app/services');

const customersController = require('../../../app/endpoint/customers/customers.controller');
const { customersDbContext, customersServices } = require('../../../app/services');

const { mockBodyValidCustomer } = require('../../mocks');

describe('getCustomers test', () => {
  let context;

  const mockOptions = {
    host: 'localhost',
    user: "admin",
    password: "password",
    database: "database",
    port: 3306
  }
  beforeAll(async () => {
    customersDbContext.createContext.mockResolvedValue(true);
  });

  const req = { query: '' };
  const res = httpMocks.createResponse();
  const next = jest.fn();
  it('should return all customers', async () => {
    // prepare
    customersServices.getAllCustomer.mockResolvedValue({});
    // execute
    await customersController.getCustomers(req, res, next);
    // validation
    expect(res.statusCode).toStrictEqual(httpStatusCodes.OK);
  });
});

describe('getCustomersById test', () => {
  beforeAll(async () => {
    customersDbContext.createContext.mockResolvedValue(true);
  });

  const req = { query: '' };
  const res = httpMocks.createResponse();
  const next = jest.fn();
  it('should return customer found', async () => {
    // prepare
    customersServices.getOneCustomer.mockResolvedValue({});
    // execute
    await customersController.getCustomersById(req, res, next);
    // validation
    expect(res.statusCode).toStrictEqual(httpStatusCodes.OK);
  });
});

describe('createCustomer test', () => {
  beforeAll(async () => {
    customersDbContext.createContext.mockResolvedValue(true);
  });

  const res = httpMocks.createResponse();
  const next = jest.fn();
  it('should return correct insert response', async () => {
    // prepare
    const req = { body: mockBodyValidCustomer };
    customersServices.getOneCustomer.mockResolvedValue({});
    // execute
    await customersController.createCustomer(req, res, next);
    // validation
    expect(res.statusCode).toStrictEqual(httpStatusCodes.CREATED);
  });
});