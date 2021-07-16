'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = require('../config');

var userSchema = new Schema({
  firstname: String,
  lastname: String,
  gender: String,
  email: String,
  date: String,
  mobileno: Number,
  drivinglicenceid: String,
  idphoto: String,
  password: String,
  role: String,
  covidStatus: String,
  status: {
    type: Number,
    enum: Object.values(config.DB_CONSTANTS.USERS.STATUS),
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const User = mongoose.model('user', userSchema);
module.exports = User;
