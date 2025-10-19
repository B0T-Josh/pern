// Import the 'pg' module
const { Client } = require('pg');

// PostgreSQL connection configuration
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'perntodo',
    password: 'hr',
    port: 5432,
});

// Connect to the database
client.connect()
  .then(() => {
    console.log('✅ Connected to PostgreSQL database');
    return client.query('SELECT NOW()'); // simple test query
  })
  .then(res => {
    console.log('🕒 Server time:', res.rows[0]);
  })
  .catch(err => {
    console.error('❌ Connection error:', err.stack);
  })
  .finally(() => {
    client.end(); // close the connection
  });
