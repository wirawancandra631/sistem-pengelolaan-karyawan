const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const SallaryJournalModel = sequelize.define(
  'SallaryJournalModel',
  {
    id_journal: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    journal_title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    journal_period: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    journal_created_at: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    journal_publish_at: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    journal_amount_cost: {
      type: DataTypes.REAL,
      allowNull: true
    }
  },
  {
    tableName: 'table_journal_sallary',
    timestamps: false
  }
);
module.exports = SallaryJournalModel;
