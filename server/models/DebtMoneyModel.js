const { DataTypes } = require('sequelize');
const EmployeModel = require('./EmployeModel');
const sequelize = require('./sequelize');

const DebtMoneyModel = sequelize.define(
  'DebtMoneyModel',
  {
    id_debt: {
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
    debt_request: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    debt_nominal: {
      type: DataTypes.REAL,
      allowNull: false
    },
    debt_status: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: 'table_debt_money'
  }
);

module.exports = DebtMoneyModel;
