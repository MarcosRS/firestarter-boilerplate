const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('user', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  nickname: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: true,
  }
});