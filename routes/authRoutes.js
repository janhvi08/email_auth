// const express  = require('express');
// const router = express.Router();

// module.exports = router;

const path = require('path');
const express = require('express');
// const userdata = require('../models/user');

const router = express.Router();
//controller
const authControllers = require('../controllers/authControllers');
const {signup, verifyOtp} = require('../controllers/authControllers');

// middleware
// const isauth = require('../middleware/isAuth');
// const { isLength } = require('lodash');

// router

router.route('/signup/verify').post(verifyOtp);
router.get('/signup', authControllers.signup_get);
router.post('/signup', authControllers.signup_post);
router.get('/login', authControllers.login_get);
router.post('/login', authControllers.login_post);
router.get('/logout', authControllers.logout_get);


module.exports = router;