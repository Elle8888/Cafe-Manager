const { Pool } = require('pg');

//Connect to the database
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

//Create a new customer
const createCustomer =  async (req, res) => {
  const { name, email, phone, address } = req.body;
  pool.query(
    'INSERT INTO customers (name, email, phone, address) VALUES ($1, $2, $3, $4)',
    [name, email, phone, address],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Customer added with ID: ${results.insertId}`);
    }
  );
}

const getCustomerById =  async (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('SELECT * FROM customers WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
}

const updateCustomerByID =  async (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM customers WHERE id = $1', [id], (error, results) => {
     if (error) {
       throw error;
     }
        res.status(200).send(results.rows);
    });
}

const deleteCustomerByID =  async (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM customers WHERE id = $1', [id], (error, results) => {
     if (error) {
       throw error;
     }
        res.status(200).send(results.rows);
    });
}

module.exports = {
    createCustomer,
    getCustomerById,
    updateCustomerByID,
    deleteCustomerByID };
