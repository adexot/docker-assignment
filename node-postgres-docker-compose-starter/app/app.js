var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var testDbRoutes = require('./routes/test_db.js');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/test_db', testDbRoutes);

app.listen(3005, () => {
    console.log(`App is running at port 3005`)
})


module.exports = app;
