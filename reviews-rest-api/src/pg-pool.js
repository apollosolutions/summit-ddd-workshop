const { Pool } = require('pg');

const pool = new Pool({
	connectionString: "postgresql://postgres:postgres@postgres:5432/postgres"
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});


module.exports = pool;