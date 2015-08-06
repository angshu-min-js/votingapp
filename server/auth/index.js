'use strict';

var express = require('express');
var passport = require('passport');
var config = require('../config/environment');
var User = require('../api/user/user.model');

// Passport Configuration
require('./local/passport').setup(User, config);
require('./twitter/passport').setup(User, config); //twitter

var router = express.Router();

router.use('/local', require('./local'));
router.use('/twitter', require('./twitter')); //twitter

module.exports = router;