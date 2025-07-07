import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaSearch } from 'react-icons/fa';
import { FaTrash, FaPencil, FaFilter } from 'react-icons/fa6';
import { ModalDialogConfirmation, ModalLarge } from '../../../components/Modal';
import LoadingData from '../../../components/LoadingData';
import EmptyData from '../../../components/EmptyData';
import imgProfil from '../../../assets/img/profil.png';
import { Table, Th, Thead, Tr, Td, Tbody } from '../../../components/TableComponent';
import {
  useDeleteEmploye,
  useFetchEmploye,
  useSearchEmploye
} from '../../../useFetch/useEmployeApi';
function EmployeDataPage() {
  let idNumber = 1;
  const [idSelected, setIdSelected] = useState(null);
  const [showModalDeleteData, setShowModalDeleteData] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const { loading, data: dataEmploye, setData, fetchData } = useFetchEmploye();
  const { searchData } = useSearchEmploye();
  const { deleteData } = useDeleteEmploye();
  const handleSearch = async (event) => {
    event.preventDefault();
    const result = await searchData(searchKeyword);
    if (Array.isArray(result)) {
      setData(result);
    }
  };
  const handleDelete = async () => {
    try {
      if (idSelected) {
        await deleteData(idSelected);
        setShowModalDeleteData(false);
        fetchData();
      }
    } catch (m) {}
  };

  return (
    <>
      <section className="w-full p-10">
        <p className="font-bold text-2xl">Data Karyawan</p>
        <div className="w-full overflow-x-auto mt-5">
          <div className="flex justify-end">
            <Link
              to="/master-data/employe/add"
              className=" flex items-center px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:shadow-lg"
            >
              <FaPlusCircle className="mr-2" />
              <span>Input Data</span>
            </Link>
          </div>
          <form action="" className="my-5 flex" onSubmit={handleSearch}>
            <input
              type="text"
              className="mr-2 w-full p-2 border border-slate-300 bg-white focus:outline-blue-500"
              placeholder="Cari berdasarkan nama dan nik"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md ">
              <FaSearch />
            </button>
          </form>
          {loading ? (
            <LoadingData />
          ) : dataEmploye.length > 0 ? (
            <>
              <Table>
                <Thead>
                  <Tr>
                    <Th>No</Th>
                    <Th>Nik</Th>
                    <Th>Nama</Th>
                    <Th>Role</Th>
                    <Th>Opsi</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {dataEmploye.map((data) => (
                    <Tr key={data.id_employe}>
                      <Td>{idNumber++}</Td>
                      <Td>{data.employe_nik}</Td>
                      <Td>{data.employe_name}</Td>
                      <Td>{data['job-desk'] ? data['job-desk'].job_desk_name : '-'}</Td>
                      <Td>
                        <div className="w-full flex justify-center ">
                          <button
                            type="button"
                            className="mr-2 text-sm p-2 bg-red-500 text-white rounded-md cursor-pointer"
                            onClick={() => {
                              setIdSelected(data.id_employe);
                              setShowModalDeleteData(true);
                            }}
                          >
                            <FaTrash />
                          </button>
                          <Link
                            to={'/master-data/employe/edit/' + data.id_employe}
                            className="text-sm p-2 bg-yellow-500 text-white rounded-md cursor-pointer"
                          >
                            <FaPencil />
                          </Link>
                        </div>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </>
          ) : (
            <EmptyData />
          )}
        </div>
      </section>

      <ModalDialogConfirmation
        visible={showModalDeleteData}
        onClose={() => setShowModalDeleteData(false)}
        onSuccess={handleDelete}
      />
    </>
  );
}

export default EmployeDataPage;
