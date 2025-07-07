const { SallaryEmployeModel, EmployeModel } = require('../models/assosication-loader');
const SallaryJournalModel = require('../models/SallaryJournalModel');
const JobDeskModel = require('../models/JobDeskModel');
const { Op } = require('sequelize');
const sequelize = require('../models/sequelize');
async function index(req, res) {
  try {
    const { id } = req.params;
    const data = await EmployeModel.findAll({
      include: {
        model: SallaryEmployeModel,
        as: 'sallary',
        required: false,
        attributes: [
          'id_sallary',
          'journal_sallary_id',
          [sequelize.fn('SUM', sequelize.col('sallary_net')), 'sallary_net']
        ],
        where: {
          journal_sallary_id: id
        }
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
    const { id_sallary } = req.params;
    const data = await SallaryEmployeModel.findOne({
      where: {
        id_sallary
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
    const {
      employe_id,
      journal_sallary_id,
      intensive_per_day,
      intensive_total_day,
      sallary_bonus,
      bonus_description,
      overtime_per_day,
      overtime_total_day,
      deductions_total,
      deductions_description
    } = req.body;
    const sallary_month = 0;
    const sallary_year = 0;
    const employeData = await EmployeModel.findOne({
      where: {
        id_employe: employe_id
      },
      include: {
        model: JobDeskModel,
        as: 'job-desk'
      }
    });
    const journalData = await SallaryJournalModel.findOne({
      where: {
        id_journal: journal_sallary_id
      }
    });
    const sallaryBasic = employeData.employe_sallary_basic;
    const totalIntensive =
      intensive_per_day && intensive_total_day ? intensive_per_day * intensive_total_day : 0;
    const sallaryBonus = sallary_bonus ? sallary_bonus : 0;
    const totalOvertime =
      overtime_per_day && overtime_total_day ? overtime_per_day * overtime_total_day : 0;
    const deductionsTotal = deductions_total ? deductions_total : 0;
    const jobDeskAllowance = employeData['job-desk']
      ? employeData['job-desk'].job_desk_allowance
      : 0;
    const employeAllowance = employeData.employe_allowance ? employeData.employe_allowance : 0;
    const netSallary =
      Number(sallaryBasic) +
      Number(totalIntensive) +
      Number(sallaryBonus) +
      Number(totalOvertime) +
      Number(jobDeskAllowance) +
      Number(employeAllowance) -
      Number(deductionsTotal);
    await SallaryEmployeModel.create({
      employe_id,
      journal_sallary_id,
      sallary_month,
      sallary_year,
      intensive_per_day,
      intensive_total_day,
      sallary_bonus,
      bonus_description,
      overtime_per_day,
      overtime_total_day,
      deductions_total,
      deductions_description,
      sallary_net: netSallary
    });
    await journalData.update({
      journal_amount_cost: journalData.journal_amount_cost + netSallary
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
      intensive_per_day,
      intensive_total_day,
      sallary_bonus,
      bonus_description,
      overtime_per_day,
      overtime_total_day,
      deductions_total,
      deductions_description
    } = req.body;
    const data = await SallaryEmployeModel.findOne({
      where: {
        id_sallary: id
      },
      include: [
        {
          model: EmployeModel,
          as: 'employe',
          include: {
            model: JobDeskModel,
            as: 'job-desk'
          }
        }
      ]
    });
    if (data) {
      const sallaryBasic = data.employe.employe_sallary_basic;
      const totalIntensive =
        intensive_per_day && intensive_total_day ? intensive_per_day * intensive_total_day : 0;
      const sallaryBonus = sallary_bonus ? sallary_bonus : 0;
      const totalOvertime =
        overtime_per_day && overtime_total_day ? overtime_per_day * overtime_total_day : 0;
      const deductionsTotal = deductions_total ? deductions_total : 0;
      const employeAllowance = data.employe.employe_allowance ? data.employe.employe_allowance : 0;
      const jobDeskAllowance = data.employe['job-desk']
        ? data.employe['job-desk'].job_desk_allowance
        : 0;
      const netSallary =
        Number(sallaryBasic) +
        Number(totalIntensive) +
        Number(sallaryBonus) +
        Number(totalOvertime) +
        Number(jobDeskAllowance) +
        Number(employeAllowance) -
        Number(deductionsTotal);
      await data.update({
        intensive_per_day,
        intensive_total_day,
        sallary_bonus,
        bonus_description,
        overtime_per_day,
        overtime_total_day,
        deductions_total,
        deductions_description,
        sallary_net: netSallary
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
    const data = await SallaryEmployeModel.findOne({
      where: {
        id_sallary: id
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
  indexSallaryEmployeController: index,
  showSallaryEmployeController: show,
  storeSallaryEmployeController: store,
  updateSallaryEmployeController: update,
  destroySallaryEmployeController: destroy
};
