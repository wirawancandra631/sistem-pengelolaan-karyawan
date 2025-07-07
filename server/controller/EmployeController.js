const { Op } = require('sequelize');
const { EmployeModel, JobDeskModel } = require('../models/assosication-loader');
async function index(req, res) {
  try {
    const data = await EmployeModel.findAll({
      include: {
        model: JobDeskModel,
        as: 'job-desk'
      }
    });
    res.json({
      status: 200,
      message: 'success',
      data
    });
  } catch (m) {
    res.status(500).json({
      status: 500,
      message: m.message
    });
  }
}
async function show(req, res) {
  try {
    const { id } = req.params;
    const data = await EmployeModel.findOne({
      where: {
        id_employe: id
      },
      include: {
        model: JobDeskModel,
        as: 'job-desk'
      }
    });
    if (data) {
      res.json({
        status: 200,
        message: 'success',
        data
      });
    } else {
      res.status(404).json({
        status: 404,
        message: 'not found'
      });
    }
  } catch (m) {
    res.status(500).json({
      status: 500,
      message: m.message
    });
  }
}
async function search(req, res) {
  const { search } = req.query;
  try {
    const data = await EmployeModel.findAll({
      where: {
        employe_name: {
          [Op.like]: `%${search}%`
        }
      },
      include: {
        model: JobDeskModel,
        as: 'job-desk'
      }
    });
    res.json({
      status: 200,
      message: 'success',
      data
    });
  } catch (m) {
    res.status(500).json({
      status: 500,
      message: m.message
    });
  }
}
async function store(req, res) {
  try {
    const {
      employe_nik,
      job_desk_id,
      employe_name,
      employe_gender,
      employe_picture,
      employe_born_date,
      employe_address,
      employe_email,
      employe_number_phone,
      employe_work_entry,
      employe_status,
      employe_work_leave,
      employe_allowance,
      employe_sallary_basic
    } = req.body;
    await EmployeModel.create({
      employe_nik,
      job_desk_id,
      employe_name,
      employe_gender,
      employe_picture,
      employe_born_date,
      employe_address,
      employe_email,
      employe_number_phone,
      employe_work_entry,
      employe_status,
      employe_work_leave,
      employe_allowance,
      employe_sallary_basic
    });
    res.json({
      status: 200,
      message: 'success'
    });
  } catch (m) {
    res.status(500).json({
      status: 500,
      message: m.message
    });
  }
}
async function update(req, res) {
  try {
    const { id } = req.params;
    const {
      employe_nik,
      job_desk_id,
      employe_name,
      employe_gender,
      employe_picture,
      employe_born_date,
      employe_address,
      employe_email,
      employe_number_phone,
      employe_work_entry,
      employe_status,
      employe_work_leave,
      employe_allowance,
      employe_sallary_basic
    } = req.body;
    const data = await EmployeModel.findOne({
      where: {
        id_employe: id
      }
    });
    if (data) {
      const findByNik = await EmployeModel.findOne({ where: { employe_nik } });
      const findByEmail = await EmployeModel.findOne({ where: { employe_email } });

      if (employe_nik != data.employe_nik && findByNik) {
        res.status(422).json({
          status: 422,
          message: 'employe nik must be unique'
        });
      } else if (employe_email != data.employe_email && findByEmail) {
        res.status(422).json({
          status: 422,
          message: 'employe email must be unique'
        });
      } else {
        await data.update({
          employe_nik,
          job_desk_id,
          employe_name,
          employe_gender,
          employe_picture,
          employe_born_date,
          employe_address,
          employe_email,
          employe_number_phone,
          employe_work_entry,
          employe_status,
          employe_work_leave,
          employe_allowance,
          employe_sallary_basic
        });
        res.json({
          status: 200,
          message: 'success'
        });
      }
    } else {
      res.status(404).json({
        status: 404,
        message: 'not found'
      });
    }
  } catch (m) {
    res.status(500).json({
      status: 500,
      message: m.message
    });
  }
}
async function destroy(req, res) {
  try {
    const { id } = req.params;
    const data = await EmployeModel.findOne({
      where: {
        id_employe: id
      }
    });
    if (data) {
      await data.destroy();
      res.json({
        status: 200,
        message: 'success'
      });
    } else {
      res.status(404).json({
        status: 404,
        message: 'not found'
      });
    }
  } catch (m) {
    res.status(500).json({
      status: 500,
      message: m.message
    });
  }
}

module.exports = {
  indexEmployeController: index,
  showEmployeController: show,
  storeEmployeController: store,
  updateEmployeController: update,
  destroyEmployeController: destroy,
  searchEmployeController: search
};
