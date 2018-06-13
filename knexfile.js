const databaseName = 'lastWill';

module.exports = {
	development: {
		client: 'pg',
		connection: {
			host: '127.0.0.1',
			user: 'prideless',
			database: 'lastWill'
		},
		migrations: {
			directory: __dirname + '/src/server/db/migrations'
		},
		seeds: {
			directory: __dirname + '/src/server/db/seeds'
		}
	},
	test: {
		client: 'pg',
		connection: `postgres://localhost:5432/${databaseName}_test`,
		migrations: {
			directory: __dirname + '/src/server/db/migrations'
		},	
		seeds: {
			directory: __dirname + '/src/server/db/seeds'
		}
	}
};
