const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: DataTypes.TEXT,
  cover_url: DataTypes.STRING,
  available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  author_id: {
    type: DataTypes.UUID,
    allowNull: false
  }
},{
  tableName: 'Books',
  timestamps: true
});

module.exports = Book;