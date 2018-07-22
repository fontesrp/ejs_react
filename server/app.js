const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ejs = require('ejs');

const indexRouter = require('./routes/index');

const app = express();

// view engine setup
ejs.delimiter = '?';
app.engine('html', ejs.renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

global.PUBLIC_PATH = path.join(__dirname, '..', 'public');

app.get('/', (req, res, next) => {
  res.render(path.join(PUBLIC_PATH, 'index.html'), { title: 'Express' });
});

app.use(express.static(PUBLIC_PATH));

app.use(indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
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

module.exports = app;
