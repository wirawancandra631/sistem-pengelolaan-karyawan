const { body } = require('express-validator');
const EmployeModel = require('../models/EmployeModel');
const JobDeskModel = require('../models/JobDeskModel');

const StoreEmployeValidation = [
  body('employe_nik')
    .notEmpty()
    .custom(async (value) => {
      const data = await EmployeModel.findOne({
        where: {
          employe_nik: value
        }
      });
      if (data) {
        throw new Error('employe_nik must be unique');
      }
    }),
  body('job_desk_id')
    .notEmpty()
    .custom(async (value) => {
      const hasJobDesk = await JobDeskModel.findOne({
        where: {
          id_job_desk: value
        }
      });
      if (!hasJobDesk) {
        throw new Error('job desk with id ' + value + ' not found');
      }
    }),
  body('employe_name').notEmpty(),
  body('employe_gender').notEmpty(),
  body('employe_work_entry').notEmpty(),
  body('employe_status').notEmpty(),
  body('employe_email').custom(async (value) => {
    if (value) {
      const data = await EmployeModel.findOne({
        where: {
          employe_email: value
        }
      });
      if (data) {
        throw new Error('employe_email must be unique');
      }
    }
  }),
  body('employe_sallary_basic').notEmpty()
];
const UpdateEmployeValidation = [
  body('employe_nik').notEmpty(),
  body('job_desk_id')
    .notEmpty()
    .custom(async (value) => {
      const hasJobDesk = await JobDeskModel.findOne({
        where: {
          id_job_desk: value
        }
      });
      if (!hasJobDesk) {
        throw new Error('job desk with id ' + value + ' not found');
      }
    }),
  body('employe_name').notEmpty(),
  body('employe_gender').notEmpty(),
  body('employe_work_entry').notEmpty(),
  body('employe_status').notEmpty(),
  body('employe_sallary_basic').notEmpty()
];
module.exports = {
  StoreEmployeValidation,
  UpdateEmployeValidation
};
