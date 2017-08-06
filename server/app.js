import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'path';
import routes from './routes';
import connectMongoose from './db';
import engines from 'consolidate';
// import favicon from 'serve-favicon';
import expressValidator from 'express-validator';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.load();

// database connection
connectMongoose();

// app
const app = express();

// view engine setup
app.engine('hbs', engines.handlebars);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// comment out if you host your client separately on cdn e.g firebase
app.use(express.static(path.join(__dirname, '../client'))); 

// validator
app.use(expressValidator());

// routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
