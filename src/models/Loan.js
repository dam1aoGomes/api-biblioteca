const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Loan = sequelize.define('Loan', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  book_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  loan_date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  },
  return_date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  returned: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'Loans',
  timestamps: true
});

module.exports = Loan;