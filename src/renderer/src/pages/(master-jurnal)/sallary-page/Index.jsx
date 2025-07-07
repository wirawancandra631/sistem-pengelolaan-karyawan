import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { data, Link, useNavigate, useParams } from 'react-router-dom';
import EmptyData from '../../../components/EmptyData';
import LoadingData from '../../../components/LoadingData';
import { ModalDialogConfirmation, ModalLarge } from '../../../components/Modal';
import { Table, Thead, Tbody, Td, Th, Tr } from '../../../components/TableComponent';
import ModalAddSallary from '../../../feature/SallaryFeature/Components/ModalAddSallary';
import ModalEditSallary from '../../../feature/SallaryFeature/ModalEditSallary';
import { useShowEmploye } from '../../../useFetch/useEmployeApi';
import { useDeleteJournal, useShowJournal } from '../../../useFetch/useJurnalApi';
import { useFetchSallary } from '../../../useFetch/useSallaryApi';
import RP from '../../../utils/moneyFormat';
function JurnalSallaryDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  let idNumber = 1;
  const { data: dataJournal, fetchData } = useShowJournal();
  const { loading, data: dataSallary } = useFetchSallary(id);
  const { deleteData } = useDeleteJournal();
  const [idSelected, setIdSelected] = useState({
    employe_id: null,
    journal_sallary_id: null
  });
  const [idEdited, setIdEdited] = useState(null);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  useEffect(() => {
    fetchData(id);
  }, []);
  const handleDeleteJournal = async () => {
    await deleteData(id);
    navigate('/master-jurnal/jurnal-sallary');
  };
  return (
    <>
      <section className="w-full p-10">
        <Link to={'/master-jurnal/jurnal-sallary'} className="flex items-center">
          <FaChevronLeft className="mr-2" />
          <span>Back</span>
        </Link>
        <div className="w-full my-5">
          <div className="w-full flex justify-between items-center">
            <p className="font-bold">Input Data Jurnal</p>
            <button
              type="button"
              className="p-1.5 bg-red-500 text-white rounded-md cursor-pointer"
              onClick={() => setShowModalDelete(true)}
            >
              <FaTrash />
            </button>
          </div>
          <div className="my-4 w-1/2">
            {dataJournal && (
              <Table>
                <Tbody>
                  <Tr>
                    <Td>Nama Jurnal</Td>
                    <Td>{dataJournal.journal_title}</Td>
                  </Tr>

                  <Tr>
                    <Td>Periode Jurnal</Td>
                    <Td>{dataJournal.journal_period}</Td>
                  </Tr>

                  <Tr>
                    <Td>Total Cos</Td>
                    <Td>{RP(dataJournal.journal_amount_cost)}</Td>
                  </Tr>
                </Tbody>
              </Table>
            )}
          </div>
          {/* <select
            name=""
            id=""
            className="ml-auto block border border-slate-300 p-3 focus:outline-blue-500"
          >
            <option value="">Tampilkan Semua</option>
            <option value="">Sudah Terinput</option>
            <option value="">Belum Terinput</option>
          </select>
          <form action="" className="mt-2">
            <input
              type="text"
              name=""
              id=""
              className="w-full p-2 border border-slate-300 focus:outline-blue-500"
              placeholder="Cari berdasarkan nama"
            />
          </form> */}
        </div>

        <div className="w-full">
          {loading ? (
            <LoadingData />
          ) : dataSallary.length > 0 ? (
            <Table>
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Nik Karyawan</Th>
                  <Th>Nama</Th>
                  <Th>Status</Th>
                  <Th>T Gaji</Th>
                  <Th>Opsi</Th>
                </Tr>
              </Thead>
              <Tbody>
                {dataSallary.map((data) => (
                  <Tr key={data.id_employe}>
                    <Td>{idNumber++}</Td>
                    <Td>{data.employe_nik}</Td>
                    <Td>{data.employe_name}</Td>
                    <Td>{data.sallary.length > 0 ? 'Terinput' : 'Belum Terinput'}</Td>
                    <Td>{data.sallary.length > 0 ? RP(data.sallary[0].sallary_net) : 0}</Td>
                    <Td>
                      {data.sallary.length > 0 ? (
                        <button
                          type="button"
                          className="mr-2 px-2 py-2   text-sm rounded-md disabled:bg-slate-300"
                          disabled
                        >
                          <FaPlus />
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="mr-2 px-2 py-2 bg-blue-500 text-white text-sm rounded-md cursor-pointer"
                          onClick={() => {
                            setIdSelected({
                              employe_id: data.id_employe,
                              journal_sallary_id: id
                            });
                            setShowModalAdd(true);
                          }}
                        >
                          <FaPlus />
                        </button>
                      )}

                      <button
                        type="button"
                        className="px-2 py-2 bg-yellow-500 text-white text-sm rounded-md cursor-pointer"
                        onClick={() => {
                          setIdEdited(data.sallary[0].id_sallary);
                          setShowModalEdit(true);
                        }}
                      >
                        <FaPencilAlt />
                      </button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          ) : (
            <EmptyData />
          )}
        </div>
      </section>
      <ModalAddSallary
        visible={showModalAdd}
        onClose={() => setShowModalAdd(false)}
        id={idSelected}
        onSuccess={() => fetchData()}
      />
      {showModalEdit && (
        <ModalEditSallary
          visible={showModalEdit}
          onClose={() => setShowModalEdit(false)}
          id={idEdited}
          onSuccess={() => null}
        />
      )}
      <ModalDialogConfirmation
        visible={showModalDelete}
        onClose={() => setShowModalDelete(false)}
        onSuccess={handleDeleteJournal}
      />
    </>
  );
}

export default JurnalSallaryDetailPage;
