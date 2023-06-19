// customerController.test.js

const { createCustomer, getCustomerById, updateCustomerByID, deleteCustomerByID } = require('server/controllers/customersController.js');
const { Pool } = require('pg');

jest.mock('pg', () => {
  const mockQuery = jest.fn();
  const mockPool = {
    query: mockQuery
  };
  return { Pool: jest.fn(() => mockPool) };
});

describe('Customer Controller', () => {
  let mockPool;
  let mockQuery;

  beforeEach(() => {
    mockQuery = jest.fn();
    mockPool = new Pool();
    mockPool.query = mockQuery;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createCustomer', () => {
    it('should insert a new customer into the database', async () => {
      const mockReq = {
        body: {
          name: 'John Doe',
          email: 'john@example.com',
          phone: '1234567890',
          address: '123 Street',
        },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      const mockResults = {
        insertId: 1,
      };
  
      mockQuery.mockImplementationOnce((query, params, callback) => {
        callback(null, mockResults);
      });
  
      await createCustomer(mockReq, mockRes);
  
      expect(mockPool.query).toHaveBeenCalledWith(
        'INSERT INTO customers (name, email, phone, address) VALUES ($1, $2, $3, $4)',
        ['John Doe', 'john@example.com', '1234567890', '123 Street'],
        expect.any(Function)
      );
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.send).toHaveBeenCalledWith('Customer added with ID: 1');
    });
  });
  describe('getCustomerById', () => {
    it('should retrieve a customer from the database by ID', async () => {
      const mockReq = {
        params: { id: 1 }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      const mockResults = {
        rows: [{ id: 1, name: 'John Doe', email: 'john@example.com' }]
      };

      mockQuery.mockImplementationOnce((query, params, callback) => {
        callback(null, mockResults);
      });

      await getCustomerById(mockReq, mockRes);

      expect(mockPool.query).toHaveBeenCalledWith(
        'SELECT * FROM customers WHERE id = $1',
        [1],
        expect.any(Function)
      );
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.send).toHaveBeenCalledWith([{ id: 1, name: 'John Doe', email: 'john@example.com' }]);
    });
  });

  // Additional tests for updateCustomerByID and deleteCustomerByID can be written similarly

});