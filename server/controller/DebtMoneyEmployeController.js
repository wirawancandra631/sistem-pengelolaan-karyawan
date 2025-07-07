const { raw } = require('body-parser');
const DebtMoneyModel = require('../models/DebtMoneyModel');
const EmployeModel = require('../models/EmployeModel');
const sequelize = require('../models/sequelize');

async function index(req, res) {
  try {
    const data = await EmployeModel.findAll({
      attributes: [
        'id_employe',
        'employe_name',
        'employe_nik',
        [sequelize.fn('SUM', sequelize.col('debt_nominal')), 'debt_amount']
      ],
      include: {
        model: DebtMoneyModel,
        as: 'debt-money',
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
    const data = await DebtMoneyModel.findAll({
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
    const { employe_id, debt_nominal, debt_request } = req.body;
    await DebtMoneyModel.create({
      employe_id,
      debt_nominal,
      debt_request,
      debt_status: 'NOT-PAID'
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
    const { debt_nominal, debt_request, debt_status } = req.body;
    const data = await DebtMoneyModel.findOne({
      where: {
        id_debt: id
      }
    });
    await data.update({
      debt_nominal,
      debt_request,
      debt_status
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
    await DebtMoneyModel.destroy({
      where: {
        id_debt: id
      }
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

module.exports = {
  indexDebtMoneyEmployeController: index,
  showDebtMoneyEmployeController: show,
  storeDebtMoneyEmployeController: store,
  updateDebtMoneyEmployeController: update,
  destroyDebtMoneyEmployeController: destroy
};
