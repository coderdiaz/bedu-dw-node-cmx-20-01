const express = require('express');
const router = express.Router();
const sequelize = require('../db');

// Get all users
router.get('/', async (req, res) => {
  const users = await sequelize.models.users.findAll();

  return res.json({
    data: users,
  });
});

module.exports = router;
