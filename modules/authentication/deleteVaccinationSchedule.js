'use strict';

const User = require('../../models/users');
const responseUtil = require('../../utilities/response');

module.exports = [
  async (req, res, next) => {

    try {
      var userId = req.body.userId;

      var userData = await User.findById(userId);

      if (!userData)
        return responseUtil.badRequestErrorResponse(res, 'User not found');

      await User.findByIdAndUpdate(userData._id, {
        $set: {
          vaccinationDate: '',
        },
      });

      responseUtil.successResponse(res, 'vaccination deleted', null);
    } catch (ex) {
      responseUtil.serverErrorResponse(res, ex);
    }
  },
];
