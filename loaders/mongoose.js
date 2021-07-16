'use strict';

const mongoose = require('mongoose');

const config = require('../config');

module.exports = () => {
  mongoose.connect(config.DB.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => console.log('MongoDB connected'));
};
