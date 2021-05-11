const express = require('express');
const mongoose = require('mongoose');
const Api = require('./route/api');
const cors = require('cors');
require('dotenv').config();

let port = process.env.PORT || 3000;

const app = express();
app.use(cors());

// connect mongoose with mongodb
mongoose
  .connect(process.env.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to database');
    app.listen(port);
  })
  .catch((err) => console.log(err));

// static files
app.use(express.static('public'));

// for post request
app.use(express.urlencoded({ extended: true }));

app.use('/api', Api);
