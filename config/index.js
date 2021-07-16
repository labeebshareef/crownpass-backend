'use strict';

const appConstants = require('./appConstants');
const dbConstants = require('./dbConstants.json');

module.exports = {
  APP_CONSTANTS: appConstants,
  DB_CONSTANTS: dbConstants,
  DB: {
    URI: 'mongodb://localhost:27017/crownpass',
  },
  FCM: {
    SERVER_KEY: 'server_key',
  },
  REDIS: {
    HOST: 'localhost',
    PORT: 6379,
    TOKEN_EXP: 86400000,
    OTP_EXP: 86400000,
  },
  S3: {
    BUCKET: 'bucket_name',
    ACCESS_KEY_ID: 'access_key_id',
    SECRET_ACCESS_KEY: 'secret_access_key',
    SIGNATURE_VERSION: 'v4',
    REGION: 'ap-south-1',
  },
  SECRETS: {
    SALT_ROUNDS: 10,
  },
  SEND_GRID: {
    API_KEY: 'api_key',
    SENDER: 'mail@sample.com',
  },
};
