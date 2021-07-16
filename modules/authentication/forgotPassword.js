'use strict';

const { check, validationResult } = require('express-validator');
const User = require('../../models/users');
// const redisUtil = require('../../utilities/redis');
const mailUtil = require('../../utilities/mail');
const responseUtil = require('../../utilities/response');

module.exports = [
  check('email').isEmail(),

  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return responseUtil.validationErrorResponse(res, errors.array());

    try {
      var email = req.body.email;

      var userData = await User.findOne({
        email: email,
        // status: {
        //   $gte: config.DB_CONSTANTS.USERS.STATUS.PENDING
        // }
      });

      if (!userData)
        return responseUtil.badRequestErrorResponse(res, 'Invalid Email');

      var otp = Math.floor(1e5 + Math.random() * 9e5);
      var subject = 'Reset Password';
      var html = `<p>Your otp is ${otp}</p>`;

      // await redisUtil.otpCreateSession(userData.email, otp);

      var mailData = await mailUtil.sendMail(userData.email, subject, null, html);

      if (!mailData)
        return responseUtil.badRequestErrorResponse(res, 'Couldn\'t send Email');

      responseUtil.successResponse(res, 'OTP has sent to your mail', null);
    } catch (ex) {
      responseUtil.serverErrorResponse(res, ex);
    }
  },
];
