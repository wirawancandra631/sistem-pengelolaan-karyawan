const path = require('node:path');
const fs = require('node:fs');
const { app } = require('electron');

function CONFIG() {
  const config = {
    ENV: 'DEVELOPMENT',
    SERVER_PORT: 3000,
    DATABASE_NAME: path.join('db-spk.db')
  };
  if (config.ENV == 'PRODUCTION') {
    const pathSettings = path.join(app.getPath('userData'), 'dataSpk', 'app-config.json');
    if (fs.existsSync(pathSettings)) {
      let dataSetting = fs.readFileSync(pathSettings, 'utf-8');
      dataSetting = JSON.parse(dataSetting);
      config.DATABASE_NAME = path.join(
        app.getPath('userData'),
        'dataSpk',
        dataSetting.DATABASE_NAME
      );
      config.SERVER_PORT = dataSetting.SERVER_PORT;
    }
  }
  return config;
}
module.exports = {
  CONFIG: CONFIG()
};
