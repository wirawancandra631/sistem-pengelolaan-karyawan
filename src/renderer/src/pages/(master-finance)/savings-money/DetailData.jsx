import React, { useState } from 'react';
import { FaChevronLeft, FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';
import { ModalDialogConfirmation } from '../../../components/Modal';
import Modal from '../../../components/Modal';
import { Table, Tbody, Thead, Tr, Th, Td } from '../../../components/TableComponent';
import { useShowEmploye } from '../../../useFetch/useEmployeApi';
import { useDeleteSavingsMoney, useShowSavingsMoney } from '../../../useFetch/useSavingsMoneyApi';
import RP from '../../../utils/moneyFormat';
function SavingsMoneyDetailPage() {
  let idNumber = 1;
  const { id } = useParams();
  const [idSelected, setIdSelected] = useState(null);
  const { data: dataEmploye } = useShowEmploye(id);
  const { data: dataSavings, fetchData } = useShowSavingsMoney(id);
  const { deleteData } = useDeleteSavingsMoney();
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const handleDelete = async () => {
    try {
      await deleteData(idSelected);
      setShowModalDelete(false);
      fetchData();
    } catch (m) {}
  };
  return (
    <>
      <section className="w-full p-10">
        <div className="w-full">
          <Link to={'/master-finance/savings-money'} className="flex items-center">
            <FaChevronLeft className="mr-2" />
            <span>Back</span>
          </Link>
        </div>
        <div className="w-full my-5">
          <div className=" w-1/2">
            <p className="mb-2 font-semibold">Riwayat Menabung</p>
            {dataEmploye && (
              <Table>
                <Tbody>
                  <Tr>
                    <Td>Nama Karyawan</Td>
                    <Td>{dataEmploye.employe_name}</Td>
                  </Tr>
                  <Tr>
                    <Td>NIK Karyawan</Td>
                    <Td>{dataEmploye.employe_nik}</Td>
                  </Tr>
                </Tbody>
              </Table>
            )}
          </div>
          <div className="w-full mt-4">
            <Table>
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Tanggal</Th>
                  <Th>Nominal</Th>
                  <Th>Opsi</Th>
                </Tr>
              </Thead>
              <Tbody>
                {dataSavings.map((data) => (
                  <Tr>
                    <Td>{idNumber++}</Td>
                    <Td>{data.savings_request}</Td>
                    <Td>{RP(data.savings_nominal)}</Td>
                    <Td>
                      <button
                        className="mr-2 p-2 bg-red-500 text-white rounded-md cursor-pointer hover:shadow-lg"
                        onClick={() => {
                          setIdSelected(data.id_savings);
                          setShowModalDelete(true);
                        }}
                      >
                        <FaTrash />
                      </button>

                      {/* <button
                        className="p-2 bg-yellow-500 text-white rounded-md cursor-pointer hover:shadow-lg"
                        onClick={() => setShowModalAdd(true)}
                      >
                        <FaPencil /> */}
                      {/* </button> */}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </div>
        </div>
      </section>
      <ModalDialogConfirmation
        visible={showModalDelete}
        onClose={() => setShowModalDelete(false)}
        onSuccess={handleDelete}
      />
      {/* <Modal visible={showModalAdd} onClose={() => setShowModalAdd(false)}>
        <form action="" className="w-full">
          <p className="font-semibold">Edit Data</p>
          <div className="my-5">
            <label htmlFor="savings_nominal" className="block mb-2">
              Nominal Tabungan
            </label>
            <div className="w-full flex items-center border border-slate-300 ">
              <span className="p-3 font-semibold bg-slate-50">Rp</span>
              <input
                type="number"
                name="savings_nominal"
                id="savings_nominal"
                className="w-full p-3 focus:outline-blue-500"
              />
            </div>
          </div>
          <div className="my-5">
            <label htmlFor="savings_request" className="block mb-2">
              Tanggal Menabung
            </label>

            <input
              type="date"
              name="savings_request"
              id="savings_request"
              className="w-full p-3 border border-slate-300 focus:outline-blue-500"
            />
          </div>
          <div className="my-5">
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white roudend-md cursor-pointer"
            >
              SAVE
            </button>
          </div>
        </form>
      </Modal> */}
    </>
  );
}

export default SavingsMoneyDetailPage;
