const DebtMoneyModel = require('../models/DebtMoneyModel');
const DepartementModel = require('../models/DepartementModel');
const EmployeModel = require('../models/EmployeModel');
const JobDeskModel = require('../models/JobDeskModel');
const SallaryEmployeModel = require('../models/SallaryEmployeModel');
const SallaryJournalModel = require('../models/SallaryJournalModel');
const SavingsMoneyModel = require('../models/SavingsMoneyModel');
const sequelize = require('../models/sequelize');

async function DatabaseMiddleware(req, res, next) {
  try {
    await sequelize.authenticate();
    await DepartementModel.sync();
    await JobDeskModel.sync();
    await EmployeModel.sync({});
    await SallaryJournalModel.sync();
    await SallaryEmployeModel.sync();
    await DebtMoneyModel.sync();
    await SavingsMoneyModel.sync();
    next();
  } catch (m) {
    res.status(500).json({
      status: 500,
      message: m.message
    });
  }
}

module.exports = DatabaseMiddleware;
