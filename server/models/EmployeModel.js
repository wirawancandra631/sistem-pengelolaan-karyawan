const { DataTypes } = require('sequelize');
const JobDeskModel = require('./JobDeskModel');
const sequelize = require('./sequelize');

const EmployeModel = sequelize.define(
  'EmployeModel',
  {
    id_employe: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    employe_nik: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    job_desk_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: JobDeskModel,
        key: 'id_job_desk'
      },
      onUpdate: 'cascade',
      onDelete: 'set null'
    },
    employe_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    employe_gender: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    employe_picture: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    employe_born_date: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    employe_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    employe_email: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    },
    employe_number_phone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    employe_work_entry: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    employe_status: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    employe_work_leave: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    employe_sallary_basic: {
      type: DataTypes.REAL,
      allowNull: false
    },
    employe_allowance: {
      type: DataTypes.REAL,
      allowNull: true
    }
  },
  {
    tableName: 'table_employe',
    timestamps: false
  }
);

module.exports = EmployeModel;
