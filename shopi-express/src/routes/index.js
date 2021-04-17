const express = require('express');
const router = express.Router();

// Add the required routes
router.use('/auth', require('./auth'));

module.exports = router;