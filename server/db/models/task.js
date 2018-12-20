const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('task', {
 id: {
   type: Sequelize.INTEGER,
   unique: true,
   primaryKey: true,
   autoIncrement: true,
   unique: true,
   field: 'id'
 },
  task: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  }
});