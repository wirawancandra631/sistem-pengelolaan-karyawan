import { toast } from 'react-toastify';
const ToastSuccess = (m) => {
  return toast(m, {
    type: 'info',
    theme: 'light'
  });
};
const ToastError = (m) => {
  return toast(m, {
    type: 'error',
    theme: 'colored'
  });
};
export { ToastSuccess, ToastError };
