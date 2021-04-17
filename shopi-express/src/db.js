const { Sequelize } = require('sequelize');

// Database connection
const sequelize = new Sequelize('shopi', 'root', 'root', {
  host: 'localhost',
  port: 3306,
  dialect: 'mariadb',
  logging: false,
});

module.exports = sequelize;
