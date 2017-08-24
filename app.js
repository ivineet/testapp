var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
//var expressValidator = require('express-validator');

//Import routes for different areas of the site
var icm = require('./routes/icm');
var icm_dashboard = require('./routes/dashboard');
var icm_login = require('./routes/login');

var testapi = require('./routes/testapi');

//var compression = require('compression');
//var helmet = require('helmet');

// Create the Express application object
var app = express();

//app.use(helmet());


// view engine setup
//app.set('views', './views');
//app.set('views', path.join(__dirname, 'views'));
// set the view engine to ejs
app.set('view engine', 'ejs');
//app.set('view engine', 'ejs');

console.log('__dirname: '+path.join(__dirname, 'views'));

//static files
app.use('/static', express.static('public'))
app.use('/files', express.static('files'))
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(expressValidator() ); // Add this after the bodyParser middleware!
//app.use(cookieParser());

//app.use(compression()); //Compress all routes

//app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'views')));

app.use('/icm', icm);
app.use('/icm/dashboard', icm_dashboard);
app.use('/icm/login', icm_login);

app.use('/test', testapi);
//app.use('/catalog', catalog);  // Add catalog routes to middleware chain.

// catch 404 and forward to error handler

app.get('/', function (req, res) {
  res.send('ICM Test')
})

app.get('/testview', function(req, res) {
  console.log('index');
    res.render('pages/test');
});


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