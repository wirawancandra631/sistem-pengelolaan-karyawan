const { DataTypes } = require('sequelize');
const EmployeModel = require('./EmployeModel');

const sequelize = require('./sequelize');

const SavingsMoneyModel = sequelize.define(
  'SavingsMoneyModel',
  {
    id_savings: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    employe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: EmployeModel,
        key: 'id_employe'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    savings_request: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    savings_nominal: {
      type: DataTypes.REAL,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: 'table_savings_money'
  }
);
module.exports = SavingsMoneyModel;
