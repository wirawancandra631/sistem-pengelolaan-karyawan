const { body } = require('express-validator');

const StoreDepartementValidation = [body('departement_name').notEmpty()];
const UpdateDepartementValidation = [body('departement_name').notEmpty()];

module.exports = {
  StoreDepartementValidation,
  UpdateDepartementValidation
};
