import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RootLayout from '../layout/RootLayout';
import HomePage from '../pages/home-page/Index';
import DepartementDataPage from '../pages/(master-data)/departement-page/Index';
import JobDeskDataPage from '../pages/(master-data)/job-desk-page/Index';
import EmployeDataPage from '../pages/(master-data)/employe-page/Index';
import EmployeAddDataPage from '../pages/(master-data)/employe-page/AddData';
import EmployeEditDataPage from '../pages/(master-data)/employe-page/EditData';
import FinanceDebtMoneyPage from '../pages/(master-finance)/debt-money-page/Index';
import DebtMoneyDetailPage from '../pages/(master-finance)/debt-money-page/DetailData';
import FinanceSavingsMoneyPage from '../pages/(master-finance)/savings-money/Index';
import SavingsMoneyDetailPage from '../pages/(master-finance)/savings-money/DetailData';
import JurnalSallaryPage from '../pages/(master-jurnal)/journal-page/Index';
import JurnalSallaryDetailPage from '../pages/(master-jurnal)/sallary-page/Index';
const route = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/master-data/departement',
        element: <DepartementDataPage />
      },

      {
        path: '/master-data/job-desk',
        element: <JobDeskDataPage />
      },
      {
        path: '/master-data/employe',
        element: <EmployeDataPage />
      },

      {
        path: '/master-data/employe/add',
        element: <EmployeAddDataPage />
      },

      {
        path: '/master-data/employe/edit/:id',
        element: <EmployeEditDataPage />
      },
      {
        path: '/master-jurnal/jurnal-sallary',
        element: <JurnalSallaryPage />
      },

      {
        path: '/master-jurnal/jurnal-sallary/detail/:id',
        element: <JurnalSallaryDetailPage />
      },

      {
        path: '/master-finance/savings-money',
        element: <FinanceSavingsMoneyPage />
      },

      {
        path: '/master-finance/savings-money/detail/:id',
        element: <SavingsMoneyDetailPage />
      },
      {
        path: '/master-finance/debt-money',
        element: <FinanceDebtMoneyPage />
      },

      {
        path: '/master-finance/debt-money/detail/:id',
        element: <DebtMoneyDetailPage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  }
]);
export default route;
