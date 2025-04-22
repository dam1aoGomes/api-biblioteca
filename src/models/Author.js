const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Author = sequelize.define('Author', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'Authors',
  timestamps: true
});

module.exports = Author;