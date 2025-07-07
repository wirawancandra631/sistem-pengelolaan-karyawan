const { body } = require('express-validator');
const EmployeModel = require('../models/EmployeModel');
const SallaryJournalModel = require('../models/SallaryJournalModel');

const StoreSallaryEmployeValidation = [
  body('employe_id')
    .notEmpty()
    .custom(async (value) => {
      const data = await EmployeModel.findOne({
        where: {
          id_employe: value
        }
      });
      if (!data) {
        throw new Error('employe with id ' + value + ' not found');
      }
    }),
  body('journal_sallary_id')
    .notEmpty()
    .custom(async (value) => {
      const data = await SallaryJournalModel.findOne({
        where: {
          id_journal: value
        }
      });
      if (!data) {
        throw new Error('jurnal sallary with id ' + value + ' not found');
      }
    })
  // body('sallary_month').notEmpty(),
  // body('sallary_year').notEmpty()
];
const UpdateSallaryEmployeValidation = [
  // body('sallary_month').notEmpty(),
  // body('sallary_year').notEmpty()
];

module.exports = {
  StoreSallaryEmployeValidation,
  UpdateSallaryEmployeValidation
};
