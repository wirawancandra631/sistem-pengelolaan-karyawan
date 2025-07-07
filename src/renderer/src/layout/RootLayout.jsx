import React from 'react';
import { FaBook, FaCalendarAlt, FaHome } from 'react-icons/fa';
import { FaMoneyBillTransfer, FaPeopleGroup, FaWindows } from 'react-icons/fa6';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
function RootLayout() {
  return (
    <>
      <aside className="w-[20%] fixed h-screen bg-blue-500">
        <header className="p-4">
          <p className="text-center font-bold text-white text-2xl">Spk Software</p>
        </header>
        <div className="my-5">
          <div className="mb-4 px-4">
            <Link className="font-bold text-white flex  items-center">
              <FaHome />
              <span className="ml-2">Home</span>
            </Link>
          </div>
          <div className="mb-4 px-4">
            <p className="font-bold text-white flex  items-center">
              <FaWindows />
              <span className="ml-2">Master Data</span>
            </p>
            <ul className="mt-2 ml-6">
              <li className="mb-3">
                <Link to={'/master-data/departement'} className="text-gray-50">
                  Data Divisi
                </Link>
              </li>

              <li className="mb-3">
                <Link to={'/master-data/job-desk'} className="text-gray-50">
                  Data Job Desk
                </Link>
              </li>

              <li className="mb-3">
                <Link to={'/master-data/employe'} className="text-gray-50">
                  Data Karyawan
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4 px-4">
            <p className="font-bold text-white flex  items-center">
              <FaBook />
              <span className="ml-2">Jurnal Penggajian</span>
            </p>
            <ul className="mt-2 ml-6">
              <li className="mb-3">
                <Link to={'/master-jurnal/jurnal-sallary'} className="text-gray-50">
                  Data Jurnal
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-4 px-4">
            <p className="font-bold text-white flex  items-center">
              <FaMoneyBillTransfer />
              <span className="ml-2">Keuangan</span>
            </p>
            <ul className="mt-2 ml-6">
              <li className="mb-3">
                <Link to={'/master-finance/debt-money'} className="text-gray-50">
                  Pinjaman Karyawan
                </Link>
              </li>

              <li className="mb-3">
                <Link to={'/master-finance/savings-money'} className="text-gray-50">
                  Tabungan Karyawan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <main className="w-[80%] ml-[20%] bg-slate-50 min-h-screen">
        <nav className="w-full bg-slate-100 p-3">
          <p className=" flex justify-end items-center  space-x-2">
            <FaCalendarAlt />
            <span>{new Date().toDateString()}</span>
          </p>
        </nav>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
