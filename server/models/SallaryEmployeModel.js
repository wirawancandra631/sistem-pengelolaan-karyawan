const { DataTypes } = require('sequelize');
const EmployeModel = require('./EmployeModel');
const SallaryJournalModel = require('./SallaryJournalModel');
const sequelize = require('./sequelize');

const SallaryEmployeModel = sequelize.define(
  'SallaryEmployeModel',
  {
    id_sallary: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    employe_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: EmployeModel,
        key: 'id_employe'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    journal_sallary_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: SallaryJournalModel,
        key: 'id_journal'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    sallary_month: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sallary_year: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    intensive_per_day: {
      type: DataTypes.REAL,
      allowNull: true
    },
    intensive_total_day: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sallary_bonus: {
      type: DataTypes.REAL,
      allowNull: true
    },
    bonus_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    overtime_per_day: {
      type: DataTypes.REAL,
      allowNull: true
    },
    overtime_total_day: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deductions_total: {
      type: DataTypes.REAL,
      allowNull: true
    },
    deductions_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sallary_net: {
      type: DataTypes.REAL,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: 'table_sallary_employe'
  }
);

module.exports = SallaryEmployeModel;
