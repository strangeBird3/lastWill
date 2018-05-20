const {Pool, Client} = require('pg');
const pool = new Pool({
	database: 'lastWill'
});

pool.query('SELECT NOW()', (err, res) => {
	console.log(err, res);
	pool.end();
});

const client = new Client({
	database: 'lastWill'
});
client.connect();

client.query('SELECT NOW()', ['Hello world!'], (err, res) => {
	console.log(err ? err.stack : res.rows[0].message);
	client.end();
});

