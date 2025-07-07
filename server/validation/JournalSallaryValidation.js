const { body, notEmpty } = require('express-validator');
const StoreJournalSallaryValidation = [
  body('journal_title').notEmpty(),
  body('journal_period').notEmpty()
];
const UpdateJournalSallaryValidation = [
  body('journal_title').notEmpty(),
  body('journal_period').notEmpty()
];

module.exports = {
  StoreJournalSallaryValidation,
  UpdateJournalSallaryValidation
};
