'use strict';

const config = require('../config');

exports.successResponse = (res, message, result) => {
  var response = {
    message: message,
  };

  if (result)
    response.result = result;

  res.status(config.APP_CONSTANTS.HTTP_STATUS_CODES.OK).send(response);
};

exports.serverErrorResponse = (res, error) => {
  console.log(error);
  res.status(config.APP_CONSTANTS.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({
    error: error.toString(),
  });
};

exports.validationErrorResponse = (res, errors) => {
  var response = {};

  if (errors)
    response.errors = errors;

  res.status(config.APP_CONSTANTS.HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY).json(response);
};

exports.badRequestErrorResponse = (res, message) => {
  res.status(config.APP_CONSTANTS.HTTP_STATUS_CODES.BAD_REQUEST).send({
    message: message,
  });
};

exports.authorizationErrorResponse = (res, message) => {
  res.status(config.APP_CONSTANTS.HTTP_STATUS_CODES.UNAUTHORIZED).send({
    message: message,
  });
};

exports.permissionErrorResponse = (res, message) => {
  res.status(config.APP_CONSTANTS.HTTP_STATUS_CODES.UNAUTHORIZED).send({
    message: message,
  });
};
