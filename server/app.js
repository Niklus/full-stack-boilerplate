'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'path';
import routes from './routes';
import connectMongoose from './db';
import engines from 'consolidate';
import expressValidator from 'express-validator';
import methodOverride from 'method-override';
import session from 'express-session';
import passport from 'passport';
import flash from 'express-flash';
import compression from 'compression';

// Passport OAuth strategies
import './auth/passport';

// database connection
connectMongoose();

// app
const app = express();

// view engine setup
app.engine('hbs', engines.handlebars);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middleware
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());
app.use(methodOverride('_method'));
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// uncomment if you host your client on same origin
// Configure Cors if if you host your client separately: 
// checkout https://www.npmjs.com/package/cors
app.use(express.static(path.join(__dirname, '../client/dist'))); 

// routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
