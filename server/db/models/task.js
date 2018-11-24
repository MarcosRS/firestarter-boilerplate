const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('task', {
  task: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  }
});