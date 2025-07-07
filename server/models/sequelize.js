const { Sequelize } = require('sequelize');
const path = require('node:path');
const { app } = require('electron');
const { CONFIG } = require('../config/config');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: CONFIG.DATABASE_NAME
});

module.exports = sequelize;
