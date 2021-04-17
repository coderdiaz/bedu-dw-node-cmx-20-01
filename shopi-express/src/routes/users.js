const express = require('express');
const router = express.Router();

// Get all users
router.get('/', (req, res) => {
  return res.json({
    data: [],
  });
});

module.exports = router;
