'use strict';

const express = require('express');
const router = express.Router();

const login = require('../modules/authentication/login');
const forgotPassword = require('../modules/authentication/forgotPassword');
// const resetPassword = require('../modules/authentication/resetPassword');
// const authCheck = require('../modules/authentication/authCheck');
const changePassword = require('../modules/authentication/changePassword');
const logout = require('../modules/authentication/logout');
const createAccount = require('../modules/authentication/createAccount');
const userList = require('../modules/authentication/userList');
const covidStatuschange = require('../modules/authentication/covidStatuschange');
const getUser = require('../modules/authentication/getUser');
const scheduleVaccination = require('../modules/authentication/scheduleVaccination');
const deleteVaccinationSchedule = require('../modules/authentication/deleteVaccinationSchedule');

router.post('/login', login);
router.post('/createAccount', createAccount);
router.post('/covidStatuschange', covidStatuschange);
router.get('/getUser/:id', getUser);

router.post('/password/forgot', forgotPassword);
// router.post('/password/reset', resetPassword);
// router.use(authCheck);
router.post('/password/change', changePassword);
router.get('/userList/:role', userList);
router.get('/logout', logout);
router.post('/scheduleVaccination', scheduleVaccination);
router.post('/deleteVaccinationSchedule', deleteVaccinationSchedule);

module.exports = router;
