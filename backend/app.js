const express = require('express');
const morgan = require('morgan');
const morgan = require('morgan');

const ordersRoutes = require('./routes/ordersRoutes')

const app = express();
app.use(morgan('dev'));


module.exports = app;