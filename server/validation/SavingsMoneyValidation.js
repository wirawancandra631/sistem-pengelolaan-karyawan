const { body, notEmpty } = require('express-validator');
const StoreSavingsMoneyValidation = [
  body('employe_id').notEmpty(),
  body('savings_nominal').notEmpty(),
  body('savings_request').notEmpty()
];
const UpdateSavingsMoneyValidation = [
  body('savings_nominal').notEmpty(),
  body('savings_request').notEmpty()
];

module.exports = {
  StoreSavingsMoneyValidation,
  UpdateSavingsMoneyValidation
};
