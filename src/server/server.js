(function() {
		const app = require('./app');
		const debug = require('debug')('herman-express:server');
		const http = require('http');

		const port = normalizePort(process.env.PORT || '3000');
		app.set('port', port);

		const server = http.createServer(app);

		server.listen(port);
		server.on('error', onError);
		server.on('listening', onListening);


		//load passport strategies
		//const localSignupStrategy = require('./server/passport/local-signup');
		//const localLoginStrategy = require('./server/passport/local-login');
		//passport.use('local-signup', localSignupStrategy);
		//passport.use('local-login', localLoginStrategy);

		// pass the authentication checker middleware
		//const authCheckMiddleware = require('./server/middleware/auth-check');
		//app.use('/api', authCheckMiddleware);

		// routes
		//const authRoutes = require('./server/routes/auth');
		//const apiRoutes = require('./server/routes/api');
		//app.use('/auth', authRoutes);
		//app.use('/api', apiRoutes);

		function normalizePort(val) {
			const port = parseInt(val, 10);
			if (isNaN(port)) {
				return val;
			}
			if (port >= 0) {
				return port;
			}
			return false;
		}

		function onError(error) {
			if (error.syscall !== 'listen') {
				throw error;
			}
			const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
			switch (error.code) {
				case 'EACCES':
					console.error(bind + ' requires elevated priveleges');
					process.exit(1);
					break;
				case 'EADDRINUSE':
					console.error(bind + ' is already in use');
					process.exit(1);
					break;
				default:
					throw error;
			}
		}

		function onListening() {
			const addr = server.address();
			const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
			debug('Listening on ' + bind);
		}
}());
