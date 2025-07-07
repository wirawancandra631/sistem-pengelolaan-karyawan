const { DataTypes } = require('sequelize');
const DepartementModel = require('./DepartementModel');
const sequelize = require('./sequelize');
const JobDeskModel = sequelize.define(
  'JobDeskModel',
  {
    id_job_desk: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    departement_id: {
      type: DataTypes.INTEGER,
      references: {
        model: DepartementModel,
        key: 'id_departement'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },

    job_desk_name: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    job_desk_allowance: {
      type: DataTypes.REAL,
      allowNull: true
    }
  },
  {
    timestamps: false,
    tableName: 'table_job_desk'
  }
);

module.exports = JobDeskModel;
