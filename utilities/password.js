'use strict';

const bcrypt = require('bcrypt');
const config = require('../config');

exports.comparePasswords = async (plainTextPassword, hash) => {
  try {
    return await bcrypt.compare(plainTextPassword, hash);
  } catch (ex) {
    console.error(ex);
    return false;
  }
};

exports.generateHash = async (plainTextPassword) => {
  try {
    return await bcrypt.hash(plainTextPassword, config.SECRETS.SALT_ROUNDS);
  } catch (ex) {
    console.error(ex);
    return false;
  }
};
