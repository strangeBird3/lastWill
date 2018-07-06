module.exports = {
	client: 'pg',
	connection: 'postgres://localhost/lastWill',
	migrations: {
		directory: __dirname + '/src/server/db/migrations'
	},
	seeds: {
		directory: __dirname + '/src/server/db/seeds'
	}
};
