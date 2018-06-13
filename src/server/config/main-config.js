(function(appConfig) {

  'use strict';

  // *** main dependencies *** //
  const path = require('path');
  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const session = require('express-session');
  const flash = require('connect-flash');
  const morgan = require('morgan');
  const passport = require('passport');

  // Other deps
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackConfig = require('../../../webpack.config.js');
  const history = require('connect-history-api-fallback');


  // *** load environment variables *** //
  require('dotenv').config();

  appConfig.init = function(app, express) {

    
    app.set('view engine', 'html');

    // *** app middleware *** //
    if (process.env.NODE_ENV !== 'test') {
      app.use(morgan('dev'));
    }
    app.use(history());
    app.use(webpackDevMiddleware(webpack(webpackConfig)));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));
    // uncomment if using express-session
    app.use(session({
      secret: 'secret key',
      resave: false,
      saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    app.use(express.static(path.join(__dirname, '..', '..', 'client', 'public')));

  };

})(module.exports);
