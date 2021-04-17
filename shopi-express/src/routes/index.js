const express = require('express');
const router = express.Router();

// Add the required routes
router.use('/auth', require('./auth'));
router.use('/users', require('./users'));

module.exports = router;