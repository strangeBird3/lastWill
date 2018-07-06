const environment = process.env.NODE_ENV;
const config = require('../../../knexfile.js');

module.exports = require('knex')(config);
