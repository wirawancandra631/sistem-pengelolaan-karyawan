const EmployeModel = require('../models/EmployeModel');
const SallaryEmployeModel = require('../models/SallaryEmployeModel');
const SavingsMoneyModel = require('../models/SavingsMoneyModel');
const sequelize = require('../models/sequelize');

async function index(req, res) {
  try {
    const data = await EmployeModel.findAll({
      attributes: [
        'id_employe',
        'employe_name',
        'employe_nik',
        [sequelize.fn('SUM', sequelize.col('savings_nominal')), 'savings_amount']
      ],
      include: {
        model: SavingsMoneyModel,
        as: 'savings-money',
        attributes: []
      },
      group: ['id_employe']
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
    const data = await SavingsMoneyModel.findAll({
      where: {
        employe_id: id
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
    const { employe_id, savings_nominal, savings_request } = req.body;
    await SavingsMoneyModel.create({
      employe_id,
      savings_nominal,
      savings_request
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
    const { employe_id, savings_nominal, savings_request } = req.body;
    const data = await SavingsMoneyModel.findOne({
      where: {
        id_savings: id
      }
    });
    await data.update({
      savings_nominal,
      savings_request
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
async function destroy(req, res) {
  try {
    const { id } = req.params;
    await SavingsMoneyModel.destroy({
      where: {
        id_savings: id
      }
    });
    res.json({
      status: 200,
      message: 'success'
    });
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
  indexSavingsMoneyEmployeController: index,
  showSavingsMoneyEmployeController: show,
  storeSavingsMoneyEmployeController: store,
  updateSavingsMoneyEmployeController: update,
  destroySavingsMoneyEmployeController: destroy
};
