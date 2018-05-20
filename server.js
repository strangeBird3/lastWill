const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const configdb = ('./config');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');
const history = require('connect-history-api-fallback');

// connect to database and load models
require('./server/models').connect();

const app = express();



// tell app to look for static files in these directories
app.use(express.static(__dirname + 'src/public'));

// tell app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// pass the passport middleware
app.use(passport.initialize());



//load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authentication checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.use(history());

app.use(webpackDevMiddleware(webpack(webpackConfig)));


app.listen(3000, () => 
	console.log("listening on port 3000!"));

