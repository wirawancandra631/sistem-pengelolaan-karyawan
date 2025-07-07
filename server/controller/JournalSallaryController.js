const SallaryJournalModel = require('../models/SallaryJournalModel');

async function index(req, res) {
  try {
    const data = await SallaryJournalModel.findAll();
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
    const data = await SallaryJournalModel.findOne({
      where: {
        id_journal: id
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
    const { journal_title, journal_period } = req.body;
    const date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    month = month <= 9 ? '0' + month : month;
    const year = new Date().getFullYear();
    const dateNow = date + '-' + month + '-' + year;
    await SallaryJournalModel.create({
      journal_title,
      journal_period,
      journal_created_at: dateNow,
      journal_amount_cost: 0
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
    const { journal_title, journal_period, journal_publish_at } = req.body;
    const data = await SallaryJournalModel.findOne({
      where: {
        id_journal: id
      }
    });
    if (data) {
      await data.update({
        journal_title,
        journal_period,
        journal_publish_at
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
    const data = await SallaryJournalModel.findOne({
      where: {
        id_journal: id
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
  indexJournalSallaryController: index,
  showJournalSallaryController: show,
  storeJournalSallaryController: store,
  updateJournalSallaryController: update,
  destroyJournalSallaryController: destroy
};
