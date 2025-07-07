const JournalSallaryController = require('../controller/JournalSallaryController');
const DebtMoneyModel = require('./DebtMoneyModel');
const DepartementModel = require('./DepartementModel');
const EmployeModel = require('./EmployeModel');
const JobDeskModel = require('./JobDeskModel');
const SallaryEmployeModel = require('./SallaryEmployeModel');
const SallaryJournalModel = require('./SallaryJournalModel');
const SavingsMoneyModel = require('./SavingsMoneyModel');
DepartementModel.hasMany(JobDeskModel, {
  foreignKey: 'departement_id',
  as: 'job-desk'
});
JobDeskModel.belongsTo(DepartementModel, {
  foreignKey: 'departement_id',
  as: 'departement'
});
JobDeskModel.hasMany(EmployeModel, {
  foreignKey: 'job_desk_id',
  as: 'employe'
});
EmployeModel.belongsTo(JobDeskModel, {
  foreignKey: 'job_desk_id',
  as: 'job-desk'
});
EmployeModel.hasMany(SallaryEmployeModel, {
  foreignKey: 'employe_id',
  as: 'sallary'
});

SallaryEmployeModel.belongsTo(EmployeModel, {
  foreignKey: 'employe_id',
  as: 'employe'
});
SallaryJournalModel.hasMany(SallaryEmployeModel, {
  foreignKey: 'journal_sallary_id',
  as: 'sallary'
});
SallaryEmployeModel.belongsTo(SallaryJournalModel, {
  foreignKey: 'journal_sallary_id',
  key: 'journal-sallary'
});

SavingsMoneyModel.belongsTo(EmployeModel, {
  foreignKey: 'employe_id',
  as: 'employe'
});
EmployeModel.hasMany(SavingsMoneyModel, {
  foreignKey: 'employe_id',
  as: 'savings-money'
});
// relation debt employe with employe

EmployeModel.hasMany(DebtMoneyModel, {
  foreignKey: 'employe_id',
  as: 'debt-money'
});
DebtMoneyModel.belongsTo(EmployeModel, {
  foreignKey: 'employe_id',
  as: 'employe'
});
module.exports = {
  EmployeModel,
  JobDeskModel,
  SallaryEmployeModel,
  DebtMoneyModel,
  SavingsMoneyModel
};
