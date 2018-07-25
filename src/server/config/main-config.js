(function(appConfig) {

  'use strict';

  // *** main dependencies *** //
  const path = require('path');
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
  appConfig.init = function(app, express) {

    
    app.set('view engine', 'html');

    // *** app middleware *** //
    if (process.env.NODE_ENV !== 'test') {
      app.use(morgan('dev'));
    }
    app.use(history());
    app.use(webpackDevMiddleware(webpack(webpackConfig)));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));
    // uncomment if using express-session
    app.use(session({
      secret: 'ajdshdjhsalkjdkljalfkj',
      resave: false,
      saveUninitialized: true
    }));
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(path.join(__dirname, '..', '..', 'client', 'public')));

  };

})(module.exports);
