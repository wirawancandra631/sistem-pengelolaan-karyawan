import React, { useState } from 'react';
import { BsClockHistory } from 'react-icons/bs';
import LoadingData from '../../../components/LoadingData';
import EmptyData from '../../../components/EmptyData';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import RP from '../../../utils/moneyFormat';
import { Table, Thead, Tr, Th, Td } from '../../../components/TableComponent';
import { useFetchSavingsMoney } from '../../../useFetch/useSavingsMoneyApi';
import ModalAddSavingsMoney from '../../../feature/savings-money-feature/components/ModalAddSavingsMoney';
function FinanceSavingsMoneyPage() {
  let idNumber = 1;
  let [idSelected, setIdSelected] = useState(null);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const { loading, data: dataSavingsMoney, fetchData } = useFetchSavingsMoney();
  return (
    <>
      <section className="w-full p-10">
        <p className="text-2xl font-bold">Data Tabungan Karyawan</p>
        <div className="w-full my-5">
          {loading ? (
            <LoadingData />
          ) : dataSavingsMoney.length > 0 ? (
            <Table>
              <Thead>
                <Tr>
                  <Th color={'bg-purple-500'}>No</Th>
                  <Th color={'bg-purple-500'}>Nama Karyawan</Th>
                  <Th color={'bg-purple-500'}>Jumlah Tabungan</Th>
                  <Th color={'bg-purple-500'}>Opsi</Th>
                </Tr>
                {dataSavingsMoney.map((data) => (
                  <Tr key={data.id_savings}>
                    <Td>{idNumber++}</Td>
                    <Td>{data.employe_name}</Td>
                    <Td>{RP(data.savings_amount)}</Td>
                    <Td>
                      <div className="w-full flex justify-center">
                        <Link
                          to={'/master-finance/savings-money/detail/' + data.id_employe}
                          className="mr-2 p-2 bg-green-500 text-white rounded-md cursor-pointer"
                        >
                          <BsClockHistory />
                        </Link>
                        <button
                          type="button"
                          className="p-2 bg-blue-500 text-white rounded-md cursor-pointer"
                          onClick={() => {
                            setIdSelected(data.id_employe);
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
      <ModalAddSavingsMoney
        visible={showModalAdd}
        onClose={() => setShowModalAdd(false)}
        id={idSelected}
        onSuccess={() => fetchData()}
      />
    </>
  );
}

export default FinanceSavingsMoneyPage;
