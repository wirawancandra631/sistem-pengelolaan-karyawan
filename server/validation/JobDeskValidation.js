const { body } = require('express-validator');
const DepartementModel = require('../models/DepartementModel');

const StoreJobDeskValidation = [
  body('job_desk_name').notEmpty(),
  body('job_desk_allowance').isNumeric(),
  body('departement_id')
    .notEmpty()
    .custom(async (value) => {
      const hasDepartement = await DepartementModel.findOne({
        where: {
          id_departement: value
        }
      });
      if (!hasDepartement) {
        throw new Error('departement with id ' + value + ' not found');
      }
    })
];
const UpdateJobDeskValidation = [
  body('job_desk_name').notEmpty(),
  body('job_desk_allowance').isNumeric(),
  body('departement_id')
    .notEmpty()
    .custom(async (value) => {
      const hasDepartement = await DepartementModel.findOne({
        where: {
          id_departement: value
        }
      });
      if (!hasDepartement) {
        throw new Error('departement with id ' + value + ' not found');
      }
    })
];

module.exports = {
  StoreJobDeskValidation,
  UpdateJobDeskValidation
};
