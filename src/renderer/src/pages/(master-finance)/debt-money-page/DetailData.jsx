import React, { useState } from 'react';
import { FaChevronLeft, FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';
import { ModalDialogConfirmation } from '../../../components/Modal';
import Modal from '../../../components/Modal';
import { Table, Tbody, Thead, Tr, Th, Td } from '../../../components/TableComponent';
import { useShowEmploye } from '../../../useFetch/useEmployeApi';
import { useDeleteDebtMoney, useShowDebtMoney } from '../../../useFetch/useDebtMoneyApi';
import RP from '../../../utils/moneyFormat';
function DebtMoneyDetailPage() {
  let idNumber = 1;
  let [idSelected, setIdSelected] = useState(null);
  const { id } = useParams();
  const { data: dataEmploye } = useShowEmploye(id);
  const { data: dataDebtMoney, fetchData } = useShowDebtMoney(id);
  const { deleteData } = useDeleteDebtMoney();
  const [showModalDelete, setShowModalDelete] = useState(false);
  const handleDelete = async () => {
    if (idSelected) {
      await deleteData(idSelected);
      setShowModalDelete(false);
      fetchData();
    }
  };
  return (
    <>
      <section className="w-full p-10">
        <div className="w-full">
          <Link to={'/master-finance/debt-money'} className="flex items-center">
            <FaChevronLeft className="mr-2" />
            <span>Back</span>
          </Link>
        </div>
        <div className="w-full my-5">
          <div className=" w-1/2">
            <p className="mb-2 font-semibold">Riwayat Pinjaman</p>
            {dataEmploye && (
              <Table>
                <Tbody>
                  <Tr>
                    <Td>Nama Karyawan</Td>
                    <Td>{dataEmploye.employe_name}</Td>
                  </Tr>
                  <Tr>
                    <Td>Nik</Td>
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
                  <Th>Status</Th>
                  <Th>Opsi</Th>
                </Tr>
              </Thead>
              <Tbody>
                {dataDebtMoney.map((data) => (
                  <Tr key={data.id_debt}>
                    <Td>{idNumber++}</Td>
                    <Td>{data.debt_request}</Td>
                    <Td>{RP(data.debt_nominal)}</Td>
                    <Td>{data.debt_status}</Td>
                    <Td>
                      <button
                        className="mr-2 p-2 bg-red-500 text-white rounded-md cursor-pointer hover:shadow-lg"
                        onClick={() => {
                          setIdSelected(data.id_debt);
                          setShowModalDelete(true);
                        }}
                      >
                        <FaTrash />
                      </button>
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
    </>
  );
}

export default DebtMoneyDetailPage;
