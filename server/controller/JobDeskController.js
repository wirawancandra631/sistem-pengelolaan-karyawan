const DepartementModel = require('../models/DepartementModel');
const EmployeModel = require('../models/EmployeModel');
const JobDeskModel = require('../models/JobDeskModel');
async function index(req, res) {
  try {
    const data = await JobDeskModel.findAll({
      include: {
        model: DepartementModel,
        as: 'departement'
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
    const data = await JobDeskModel.findOne({
      where: {
        id_job_desk: id
      },
      include: {
        model: DepartementModel,
        as: 'departement'
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
async function store(req, res) {
  try {
    const { job_desk_name, job_desk_allowance, departement_id } = req.body;
    await JobDeskModel.create({
      departement_id,
      job_desk_name,
      job_desk_allowance
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
    const { job_desk_name, job_desk_allowance, departement_id } = req.body;
    const data = await JobDeskModel.findOne({
      where: {
        id_job_desk: id
      }
    });
    if (data) {
      await data.update({
        job_desk_name,
        job_desk_allowance,
        departement_id
      });
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
async function destroy(req, res) {
  try {
    const { id } = req.params;
    const data = await JobDeskModel.findOne({
      where: {
        id_job_desk: id
      }
    });
    if (data) {
      data.destroy();
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
  indexJobDeskController: index,
  showJobDeskController: show,
  storeJobDeskController: store,
  updateJobDeskController: update,
  destroyJobDeskController: destroy
};
