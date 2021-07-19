'use strict';

const User = require('../../models/users');
const responseUtil = require('../../utilities/response');

module.exports = [
  async (req, res, next) => {

    try {
      var userId = req.body.userId;
      console.log(userId);
      var vaccinationDate = req.body.vaccinationDate;
      console.log('test');

      var userData = await User.findById(userId);
      if (!userData)
        return responseUtil.badRequestErrorResponse(res, 'User not found');

      await User.findByIdAndUpdate(userData._id, {
        $set: {
          vaccinationDate: vaccinationDate,
        },
      });

      responseUtil.successResponse(res, 'vaccination booked', null);
    } catch (ex) {
      responseUtil.serverErrorResponse(res, ex);
    }
  },
];
