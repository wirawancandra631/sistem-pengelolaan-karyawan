import './assets/main.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import route from './router/route';
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <>
    <StrictMode>
      <ToastContainer />
      <RouterProvider router={route}></RouterProvider>
    </StrictMode>
  </>
);
