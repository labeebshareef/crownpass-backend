'use strict';

const express = require('express');
const router = express.Router();

const authentication = require('./authentication');
// const authCheck = require('../modules/authentication/authCheck');

router.use('/auth', authentication);
// router.use(authCheck);

module.exports = router;
