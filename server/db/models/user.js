const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true, 
    unique: true,
    field: 'id'
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});
