const db = require('../../db');

app.get('/:id', (req, res, next) => {
	db.query('SELECT * FROM users WHERE id = $1', [id], (
		if (err) {
			return next(err)
		}
		res.send(res.rows[0])
	));
});
