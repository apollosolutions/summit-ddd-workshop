const { Pool } = require('pg');

const pool = new Pool({
	connectionString: "postgresql://postgres:postgres@localhost:5432/postgres"
  // user: 'postgres',
  // host: 'http://localhost',
  // database: 'postgres',
  // password: 'postgres',
  // port: 5432,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});


module.exports = pool;