import React, { useState } from 'react';
import { BsClockHistory } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { Table, Thead, Tr, Th, Td } from '../../../components/TableComponent';
import { useFetchDebtMoney } from '../../../useFetch/useDebtMoneyApi';
import LoadingData from '../../../components/LoadingData';
import EmptyData from '../../../components/EmptyData';
import RP from '../../../utils/moneyFormat';
import ModalAddDebtMoney from '../../../feature/debt-money-feature/components/ModalAddDebtMoney';
function FinanceDebtMoneyPage() {
  let idNumber = 1;
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [idEmployeSelected, setIdEmployeSelected] = useState(null);
  const { loading, data: dataDebtMoney, fetchData } = useFetchDebtMoney();
  return (
    <>
      <section className="w-full p-10">
        <p className="text-2xl font-bold">Data Pinjaman Karyawan</p>
        <div className="w-full my-5">
          {loading ? (
            <LoadingData />
          ) : dataDebtMoney.length > 0 ? (
            <Table>
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Nama Karyawan</Th>
                  <Th>Jumlah Pinjaman</Th>
                  <Th>Opsi</Th>
                </Tr>
                {dataDebtMoney.map((data) => (
                  <Tr key={data.id_employe}>
                    <Td>{idNumber++}</Td>
                    <Td>{data.employe_name}</Td>
                    <Td>{RP(data.debt_amount)}</Td>
                    <Td>
                      <div className="w-full flex justify-center">
                        <Link
                          to={'/master-finance/debt-money/detail/' + data.id_employe}
                          className="mr-2 p-2 bg-green-500 text-white rounded-md cursor-pointer"
                        >
                          <BsClockHistory />
                        </Link>
                        <button
                          type="button"
                          className="p-2 bg-blue-500 text-white rounded-md cursor-pointer"
                          onClick={() => {
                            setIdEmployeSelected(data.id_employe);
                            setShowModalAdd(true);
                          }}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </Td>
                  </Tr>
                ))}
              </Thead>
            </Table>
          ) : (
            <EmptyData />
          )}
        </div>
      </section>
      <ModalAddDebtMoney
        visible={showModalAdd}
        onClose={() => setShowModalAdd(false)}
        id={idEmployeSelected}
        onSuccess={() => fetchData()}
      />
    </>
  );
}

export default FinanceDebtMoneyPage;
