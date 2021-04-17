const express = require('express');
const router = express.Router();

const authenticate = require('../middlewares/authetication');

// Add the required routes
router.use('/auth', require('./auth'));
router.use('/users', authenticate, require('./users'));

module.exports = router;