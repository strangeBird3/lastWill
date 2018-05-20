const mongoose = require('mongoose');

module.exports.connect = () => {
	mongoose.connect('mongodb://localhost/test', (err) => {
		console.error(`Mongoose connection error: ${err}`);
		process.exit(1);
	});

	// load models
	require('./user');
};