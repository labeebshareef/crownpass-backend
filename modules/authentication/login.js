'use strict';

const { check, validationResult } = require('express-validator');
const User = require('../../models/users');
const responseUtil = require('../../utilities/response');

module.exports = [
  check('email').isEmail(),
  check('password').isLength({ min: 6 }),

  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return responseUtil.validationErrorResponse(res, errors.array());

    try {
      var email = req.body.email;
      var password = req.body.password;

      var userData = await User.findOne({
        email: email,
      });
      console.log(userData);
      if (!userData)
        return responseUtil.badRequestErrorResponse(res, 'Invalid Email');

      var comparePassword = false;
      if (password === userData.password)
        comparePassword = true;

      if (!comparePassword)
        return responseUtil.badRequestErrorResponse(res, 'Incorrect Password');

      responseUtil.successResponse(res, 'Successfully logged in', {
        role: userData.role,
        userData: userData,
      });
    } catch (ex) {
      responseUtil.serverErrorResponse(res, ex);
    }
  },
];
