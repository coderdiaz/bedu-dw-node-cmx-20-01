const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permissions = require('../middlewares/permissions');

// Get all users
router.get('/', permissions('admin'), async (req, res) => {
  const users = await sequelize.models.users.findAll();

  return res.json({
    data: users,
  });
});

module.exports = router;
