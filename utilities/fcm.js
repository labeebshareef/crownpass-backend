'use strict';

const FCM = require('fcm-node');
const config = require('../config');
const fcm = new FCM(config.FCM.SERVER_KEY);

exports.sendNotification = (tokens, title, body, data) => {
  try {
    var message = {
      // to: tokens,
      registration_ids: tokens,
      notification: {
        title: title,
        body: body,
      },
      data: data,
    };

    fcm.send(message, function (err, response) {
      if (err) {
        console.log('Something has gone wrong!');
      } else {
        console.log('Successfully sent with response: ', response);
      }
    });
  } catch (ex) {
    console.error(ex);
  }
};
