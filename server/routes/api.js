const express = require('express');
const {
  indexDepartementController,
  showDepartementController,
  storeDepartementController,
  updateDepartementController,
  destroyDepartementController
} = require('../controller/DepartementController');
const {
  indexEmployeController,
  showEmployeController,
  storeEmployeController,
  updateEmployeController,
  destroyEmployeController,
  searchEmployeController
} = require('../controller/EmployeController');
const {
  indexJobDeskController,
  showJobDeskController,
  storeJobDeskController,
  updateJobDeskController,
  destroyJobDeskController
} = require('../controller/JobDeskController');
const {
  indexJournalSallaryController,
  showJournalSallaryController,
  storeJournalSallaryController,
  updateJournalSallaryController,
  destroyJournalSallaryController
} = require('../controller/JournalSallaryController');
const {
  indexSallaryEmployeController,
  showSallaryEmployeController,
  storeSallaryEmployeController,
  updateSallaryEmployeController,
  destroySallaryEmployeController
} = require('../controller/SallaryEmployeController');

const {
  indexSavingsMoneyEmployeController,
  showSavingsMoneyEmployeController,
  storeSavingsMoneyEmployeController,
  updateSavingsMoneyEmployeController,
  destroySavingsMoneyEmployeController
} = require('../controller/SavingsMoneyEmployeController');

const {
  indexDebtMoneyEmployeController,
  showDebtMoneyEmployeController,
  storeDebtMoneyEmployeController,
  updateDebtMoneyEmployeController,
  destroyDebtMoneyEmployeController
} = require('../controller/DebtMoneyEmployeController');
const ValidationMiddleware = require('../middleware/ValidationMiddleware');
const {
  StoreDepartementValidation,
  UpdateDepartementValidation
} = require('../validation/DepartementValidation');
const {
  StoreJobDeskValidation,
  UpdateJobDeskValidation
} = require('../validation/JobDeskValidation');
const {
  StoreEmployeValidation,
  UpdateEmployeValidation
} = require('../validation/EmployeValidation');
const {
  StoreJournalSallaryValidation,
  UpdateJournalSallaryValidation
} = require('../validation/JournalSallaryValidation');
const {
  StoreSallaryEmployeValidation,
  UpdateSallaryEmployeValidation
} = require('../validation/SallaryEmployeValidation');
const {
  StoreSavingsMoneyValidation,
  UpdateSavingsMoneyValidation
} = require('../validation/SavingsMoneyValidation');
const { StoreDebtValidation, UpdateDebtValidation } = require('../validation/DebtMoneyValidation');
const apiRouter = express.Router();
apiRouter.get('/', (req, res) => {
  res.send('api success');
});

apiRouter.get('/departement', indexDepartementController);
apiRouter.get('/departement/:id', showDepartementController);
apiRouter.post(
  '/departement',
  StoreDepartementValidation,
  ValidationMiddleware,
  storeDepartementController
);
apiRouter.put(
  '/departement/:id',
  UpdateDepartementValidation,
  ValidationMiddleware,
  updateDepartementController
);
apiRouter.delete('/departement/:id', destroyDepartementController);

apiRouter.get('/job-desk', indexJobDeskController);
apiRouter.get('/job-desk/:id', showJobDeskController);
apiRouter.post('/job-desk', StoreJobDeskValidation, ValidationMiddleware, storeJobDeskController);
apiRouter.put(
  '/job-desk/:id',
  UpdateJobDeskValidation,
  ValidationMiddleware,
  updateJobDeskController
);
apiRouter.delete('/job-desk/:id', destroyJobDeskController);

apiRouter.get('/employe', indexEmployeController);
apiRouter.get('/employe/search', searchEmployeController);
apiRouter.get('/employe/:id', showEmployeController);
apiRouter.post('/employe', StoreEmployeValidation, ValidationMiddleware, storeEmployeController);
apiRouter.put(
  '/employe/:id',
  UpdateEmployeValidation,
  ValidationMiddleware,
  updateEmployeController
);
apiRouter.delete('/employe/:id', destroyEmployeController);

apiRouter.get('/journal-sallary', indexJournalSallaryController);
apiRouter.get('/journal-sallary/:id', showJournalSallaryController);
apiRouter.post(
  '/journal-sallary',
  StoreJournalSallaryValidation,
  ValidationMiddleware,
  storeJournalSallaryController
);
apiRouter.put(
  '/journal-sallary/:id',
  UpdateJournalSallaryValidation,
  ValidationMiddleware,
  updateJournalSallaryController
);
apiRouter.delete('/journal-sallary/:id', destroyJournalSallaryController);

apiRouter.get('/sallary-employe/:id', indexSallaryEmployeController);
apiRouter.get('/sallary-employe/detail/:id_sallary', showSallaryEmployeController);
apiRouter.post(
  '/sallary-employe',
  StoreSallaryEmployeValidation,
  ValidationMiddleware,
  storeSallaryEmployeController
);
apiRouter.put(
  '/sallary-employe/:id',
  UpdateSallaryEmployeValidation,
  ValidationMiddleware,
  updateSallaryEmployeController
);
apiRouter.delete('/sallary-employe/:id', destroySallaryEmployeController);

apiRouter.get('/savings-money-employe', indexSavingsMoneyEmployeController);
apiRouter.get('/savings-money-employe/:id', showSavingsMoneyEmployeController);
apiRouter.post(
  '/savings-money-employe',
  StoreSavingsMoneyValidation,
  ValidationMiddleware,
  storeSavingsMoneyEmployeController
);
apiRouter.put(
  '/savings-money-employe/:id',
  UpdateSavingsMoneyValidation,
  ValidationMiddleware,
  updateSavingsMoneyEmployeController
);
apiRouter.delete('/savings-money-employe/:id', destroySavingsMoneyEmployeController);

apiRouter.get('/debt-money-employe', indexDebtMoneyEmployeController);
apiRouter.get('/debt-money-employe/:id', showDebtMoneyEmployeController);
apiRouter.post(
  '/debt-money-employe',
  StoreDebtValidation,
  ValidationMiddleware,
  storeDebtMoneyEmployeController
);
apiRouter.put(
  '/debt-money-employe/:id',
  UpdateDebtValidation,
  ValidationMiddleware,
  updateDebtMoneyEmployeController
);
apiRouter.delete('/debt-money-employe/:id', destroyDebtMoneyEmployeController);

module.exports = apiRouter;
