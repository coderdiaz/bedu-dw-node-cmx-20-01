const { Sequelize } = require('sequelize');

// Importing models
const User = require('./models/User');
const Product = require('./models/Product');

// Database connection
const sequelize = new Sequelize('shopi', 'root', 'root', {
  host: 'localhost',
  port: 3306,
  dialect: 'mariadb',
  logging: false,
});

// Getting models
const models = [
  User,
  Product,
];

// Registering models in Sequelize
for (let model of models) {
  model(sequelize);
}

module.exports = sequelize;
