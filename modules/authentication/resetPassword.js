// 'use strict';

// const { check, validationResult } = require('express-validator');
// const User = require('../../models/users');
// const passwordUtil = require('../../utilities/password');
// // const redisUtil = require('../../utilities/redis');
// const responseUtil = require('../../utilities/response');

// module.exports = [
//   check('email').isEmail(),
//   check('otp').not().isEmpty(),
//   check('new_password').isLength({ min: 6 }),

//   async (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty())
//       return responseUtil.validationErrorResponse(res, errors.array());

//     try {
//       var email = req.body.email;
//       // var otp = req.body.otp;
//       var newPassword = req.body.new_password;

//       // var checkOtp = await redisUtil.otpCheckSession(email, otp);

//       if (!checkOtp)
//         return responseUtil.badRequestErrorResponse(res, 'Incorrect OTP');

//       var passwordHash = await passwordUtil.generateHash(newPassword);

//       await User.updateOne({
//         email: email,
//       }, {
//         $set: {
//           password: passwordHash,
//         },
//       });

//       responseUtil.successResponse(res, 'Password reset successfully', null);
//     } catch (ex) {
//       responseUtil.serverErrorResponse(res, ex);
//     }
//   },
// ];
