const { app } = require('electron');
const fs = require('node:fs');
const path = require('node:path');
const pathApp = app.getPath('userData');

function createSettingFile() {
  const settingTemplate = {
    SERVER_PORT: 3000,
    DATABASE_NAME: 'db-spk.db'
  };
  if (!fs.existsSync(path.join(pathApp, 'dataSpk', 'app-config.json'))) {
    fs.writeFile(
      path.join(pathApp, 'dataSpk', 'app-config.json'),
      JSON.stringify(settingTemplate),
      () => {}
    );
  }
}
function installFolder() {
  if (fs.existsSync(path.join(pathApp, 'dataSpk'))) {
    createSettingFile();
    return;
  } else {
    fs.mkdir(path.join(pathApp, 'dataSpk'), () => {});
    createSettingFile();
  }
}
export default installFolder;
