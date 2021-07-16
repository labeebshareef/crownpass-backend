'use strict';

const AWS = require('aws-sdk');

const config = require('../config');

const s3 = new AWS.S3({
  accessKeyId: config.S3.ACCESS_KEY_ID,
  secretAccessKey: config.S3.SECRET_ACCESS_KEY,
  signatureVersion: config.S3.SIGNATURE_VERSION,
  region: config.S3.REGION,
});

exports.uploadFile = async (file, path) => {
  try {
    var params = {
      Bucket: config.S3.BUCKET,
      Body: file,
      Key: path,
    };

    await s3.upload(params).promise();
    return true;
  } catch (ex) {
    console.error(ex);
    return false;
  }
};

exports.getSignedUrl = async (path) => {
  try {
    var params = {
      Bucket: config.S3.BUCKET,
      Key: path,
      Expires: 10,
    };

    return await s3.getSignedUrlPromise('getObject', params);
  } catch (ex) {
    console.error(ex);
    return false;
  }
};
