'use strict';

// const config = require('../../config');
const User = require('../../models/users');
// const passwordUtil = require('../../utilities/password');
// const redisUtil = require('../../utilities/redis');
const responseUtil = require('../../utilities/response');

module.exports = [
  async (req, res, next) => {
    try {
      var userParam = req.body;
      var email = req.body.email;


      if (await User.findOne({ email: email })) {
        return responseUtil.badRequestErrorResponse(res, 'Email Exists');
      }

      const user = new User(userParam);

      // hash password
      if (userParam.password) {
        user.password = userParam.password;
      }

      // save user
      await user.save();

      responseUtil.successResponse(res, 'Account Creation Successful', {
        // token: token,
      });
    } catch (ex) {
      responseUtil.serverErrorResponse(res, ex);
    }
  },
];
