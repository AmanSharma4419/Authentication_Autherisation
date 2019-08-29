var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
//requring the sessions
var session = require("express-session");
var mongoStore = require("connect-mongo")(session);
//connectiong with database
mongoose.connect("mongodb://localhost/userData",{useNewUrlParser:true},(err) => {
    err ? console.log(err) : console.log("mongodb connected")
});

var indedxRouter = require('./routes/index');
//providing the path for register route
var registrationRouter = require('./routes/register');
//providinf the path for login route
var loginRouter = require("./routes/login");
//user routr importing
var userRouter = require("./routes/users");
//mounting the express
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//session midleware
app.use(session({
  secret:"xyz",
  resave:true,
  saveUninitialized:true,
  store: new mongoStore({mongooseConnection: mongoose.connection})
}));
// handling the route in server
app.use('/register', registrationRouter);
app.use('/login',loginRouter);
app.use('/users',userRouter);
app.use('/', indedxRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.redirect('/');
});


module.exports = app;
