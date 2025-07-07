const { body, notEmpty } = require('express-validator');
const StoreDebtValidation = [
  body('employe_id').notEmpty(),
  body('debt_nominal').notEmpty(),
  body('debt_request').notEmpty()
];

const UpdateDebtValidation = [
  body('debt_nominal').notEmpty(),
  body('debt_request').notEmpty(),
  body('debt_status').notEmpty()
];

module.exports = {
  StoreDebtValidation,
  UpdateDebtValidation
};
