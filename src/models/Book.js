const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Book = sequelize.define('Book', {
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
});

module.exports = Book;