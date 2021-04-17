const { Sequelize } = require('sequelize');

// Importing models
const User = require('./models/User');

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
];

// Registering models in Sequelize
for (let model of models) {
  model(sequelize);
}

module.exports = sequelize;
