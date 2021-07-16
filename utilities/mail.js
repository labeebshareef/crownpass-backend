'use strict';

const sgMail = require('@sendgrid/mail');

const config = require('../config');

sgMail.setApiKey(config.SEND_GRID.API_KEY);

exports.sendMail = async (email, subject, text, html) => {
  try {
    var mail = {
      from: config.SEND_GRID.SENDER,
      to: email,
      subject: subject,
    };

    if (text)
      mail.text = text;

    if (html)
      mail.html = html;

    await sgMail.send(mail);
    return true;
  } catch (ex) {
    console.error(ex);
    return false;
  }
};
