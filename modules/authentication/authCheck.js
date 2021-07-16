// 'use strict';

// const redisUtil = require('../../utilities/redis');
// const responseUtil = require('../../utilities/response');

// module.exports = async (req, res, next) => {
//   try {
//     var token = req.headers.authorization;

//     if (!token)
//       return responseUtil.authorizationErrorResponse(res, 'Authorization required');

//     var userData = await redisUtil.checkSession(token);

//     if (!userData)
//       return responseUtil.authorizationErrorResponse(res, 'Token expired');

//     req.userData = userData;
//     next();
//   } catch (ex) {
//     responseUtil.serverErrorResponse(res, ex);
//   }
// };
