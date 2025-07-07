const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');
const DepartementModel = sequelize.define(
  'DepartmentModel',
  {
    id_departement: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    departement_name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },

  {
    timestamps: false,
    tableName: 'table_departement'
  }
);

module.exports = DepartementModel;
