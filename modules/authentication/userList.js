'use strict';

const User = require('../../models/users');
const responseUtil = require('../../utilities/response');

module.exports = [

  async (req, res, next) => {

    try {
      var role = req.params.role;

      var userData = await User.find({
        role: role,
      });
      console.log(userData);

      responseUtil.successResponse(res, 'user list', {
        data: userData,
      });
    } catch (ex) {
      responseUtil.serverErrorResponse(res, ex);
    }
  },
];
