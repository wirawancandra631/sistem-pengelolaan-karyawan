const DepartementModel = require('../models/DepartementModel');
const JobDeskModel = require('../models/JobDeskModel');

async function index(req, res) {
  try {
    const data = await DepartementModel.findAll({
      include: {
        model: JobDeskModel,
        as: 'job-desk'
      },
      order: [['id_departement', 'DESC']]
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
    const data = await DepartementModel.findOne({
      where: {
        id_departement: id
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
async function store(req, res) {
  try {
    const { departement_name } = req.body;
    await DepartementModel.create({
      departement_name
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
    const { departement_name } = req.body;
    const data = await DepartementModel.findOne({
      where: {
        id_departement: id
      }
    });
    if (data) {
      await DepartementModel.update(
        {
          departement_name
        },
        {
          where: {
            id_departement: id
          }
        }
      );
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
    const data = await DepartementModel.findOne({
      where: {
        id_departement: id
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
    res
      .json({
        status: 500,
        message: m.message
      })
      .status(500);
  }
}

module.exports = {
  indexDepartementController: index,
  showDepartementController: show,
  storeDepartementController: store,
  updateDepartementController: update,
  destroyDepartementController: destroy
};
