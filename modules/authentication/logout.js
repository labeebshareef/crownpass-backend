'use strict';

const User = require('../../models/users');
// const redisUtil = require('../../utilities/redis');
const responseUtil = require('../../utilities/response');

module.exports = async (req, res, next) => {
  try {
    var deviceId = req.params.device_id;
    var userData = req.userData;
    // var token = req.headers.authorization;
    // await redisUtil.logoutSession(token);

    await User.findByIdAndUpdate(userData._id, {
      $pull: {
        fcm: {
          device_id: deviceId,
        },
      },
    });

    responseUtil.successResponse(res, 'Successfully logged out', null);
  } catch (ex) {
    responseUtil.serverErrorResponse(res, ex);
  }
};
