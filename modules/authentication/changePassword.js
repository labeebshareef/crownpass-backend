'use strict';

const { check, validationResult } = require('express-validator');
const User = require('../../models/users');
const passwordUtil = require('../../utilities/password');
const responseUtil = require('../../utilities/response');

module.exports = [
  check('old_password').isLength({ min: 6 }),
  check('new_password').isLength({ min: 6 }),

  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return responseUtil.validationErrorResponse(res, errors.array());

    try {
      var oldPassword = req.body.old_password;
      var newPassword = req.body.new_password;

      var userData = await User.findById(req.userData._id);

      if (!userData)
        return responseUtil.badRequestErrorResponse(res, 'User not found');

      var comparePassword = await passwordUtil.comparePasswords(oldPassword, userData.password);

      if (!comparePassword)
        return responseUtil.badRequestErrorResponse(res, 'Incorrect Password');

      var newPasswordHash = await passwordUtil.generateHash(newPassword);

      await User.findByIdAndUpdate(userData._id, {
        $set: {
          password: newPasswordHash,
        },
      });

      responseUtil.successResponse(res, 'Password changed successfully', null);
    } catch (ex) {
      responseUtil.serverErrorResponse(res, ex);
    }
  },
];
