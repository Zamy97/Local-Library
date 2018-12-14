const createError = require('http-errors');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index.js');
const usersRouter = require('./routes/users.js');
const catalogRouter = require('./routes/catalog.js');

// Create the Express application object
var app = express();

// Import the mongoose module
const mongoose = require('mongoose');

// Set up the default mongoose connection
var mongoDB = 'mongodb://user1:password1@ds017175.mlab.com:17175/local_library_project';

// Connect to mongodb
mongoose.connect(mongoDB, { useNewUrlParser: true } );

// Don't know what this line is doing
mongoose.Promise = global.Promise;

// Get the default connection
var db = mongoose.connection;

// Bind connection to error event(to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// Middlewares
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Route Handling code to he request handling chain
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);

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

module.exports = app;
