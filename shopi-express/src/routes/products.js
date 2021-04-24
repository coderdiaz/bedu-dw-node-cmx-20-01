const express = require('express');
const { ValidationError } = require('sequelize');
const router = express.Router();
const sequelize = require('../db');
const permissions = require('../middlewares/permissions');

// Get all products
router.get('/', permissions('client', 'admin'), async (req, res) => {
  const products = await sequelize.models.products.findAll();

  return res.json({
    data: products,
  });
});

// Create products
router.post('/', permissions('admin'), async (req, res) => {
  try {
    const { sku, name, description, price, featuredImage } = req.body;

    await sequelize.models.products.create({
      sku,
      name,
      description,
      price,
      featuredImage,
    });

    return res.status(201).json();
  } catch (e) {
    if (e instanceof ValidationError) {
      return res.status(400).json({
        errors: e.errors,
      });
    }

    console.error(e); // Show the error on terminal
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
});

module.exports = router;
