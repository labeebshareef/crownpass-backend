'use strict';

const User = require('../../models/users');
const responseUtil = require('../../utilities/response');

module.exports = [

  async (req, res, next) => {

    try {
      var id = req.params.id;

      var userData = await User.findOne({
        _id: id,
      });
      console.log(userData);

      responseUtil.successResponse(res, 'user found', {
        data: userData,
      });
    } catch (ex) {
      responseUtil.serverErrorResponse(res, ex);
    }
  },
];
