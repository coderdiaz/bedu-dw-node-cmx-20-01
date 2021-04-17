const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const jwt = require('jsonwebtoken');

// Register a new user
router.post('/signup', async (req, res) => {
  const { body } = req;

  let user = await sequelize.models.users.findOne({
    where: {
      email: body.email,
    },
  });

  // Validate if the user exists
  if (user) {
    return res.status(400).json({
      message: 'This email is already registered',
    });
  }

  // Creating the user
  user = await sequelize.models.users.create({
    name: body.name,
    email: body.email,
    password: body.password,
    type: 'client',
  });

  // Saving the user
  await user.save();

  return res.json({
    message: 'Registered user',
  });
});

// Login
router.post('/login', async (req, res) => {
  const { body } = req;

  const user = await sequelize.models.users.findOne({
    where: {
      email: body.email,
    }
  });

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (!user.validPassword(body.password)) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const token = jwt.sign({
    iss: 'Shopi SAPI de CV',
    id: user.id
  }, 'secretkey', {
    expiresIn: 3600000,
  });

  return res.json({
    message: 'Authenticated',
    token,
  });
});

module.exports = router;