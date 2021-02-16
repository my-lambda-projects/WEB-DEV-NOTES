const { Pool } = require('pg');

const pool = new Pool({ database: 'breadit' });

async function getUsers() {
  const users = await pool.query(`SELECT * FROM users;`);
  console.log(users.rows);
}

getUsers();
