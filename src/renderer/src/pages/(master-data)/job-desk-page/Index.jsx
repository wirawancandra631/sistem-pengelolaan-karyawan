import React, { useEffect, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { FaTrash, FaPencil } from 'react-icons/fa6';
import EmptyData from '../../../components/EmptyData';
import LoadingData from '../../../components/LoadingData';
import Modal, { ModalDialogConfirmation } from '../../../components/Modal';
import { Table, Thead, Th, Tr, Td, Tbody } from '../../../components/TableComponent';
import ModalAddJobDesk from '../../../feature/job-desk-feature/components/ModalAddJobDesk';
import ModalEditJobDesk from '../../../feature/job-desk-feature/components/ModalEditJobDesk';
import { useDeleteJobDesk, useFetchJobDesk } from '../../../useFetch/useJobDeskApi';
import RP from '../../../utils/moneyFormat';
function JobDeskDataPage() {
  let idNumber = 1;
  const [showModalAddData, setShowModalAddData] = useState(false);
  const [showModalEditData, setShowModalEditData] = useState(false);
  const [showModalDeleteData, setShowModalDeleteData] = useState(false);
  const [idSelected, setIdSelected] = useState(null);
  const { loading, data: dataJobDesk, fetchData } = useFetchJobDesk();
  const { deleteData } = useDeleteJobDesk();
  /*method list */

  const handleDelete = async () => {
    await deleteData(idSelected);
    setShowModalDeleteData(false);
    fetchData();
  };

  return (
    <>
      <section className="w-full p-10">
        <p className="text-2xl font-bold">Data Job Desk Pekerjaan</p>
        <div className="w-full overflow-x-auto mt-5">
          <button
            type="button"
            className="flex items-center ml-auto block px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:shadow-lg"
            onClick={() => setShowModalAddData(true)}
          >
            <FaPlusCircle className="mr-2" />
            <span>Input Data</span>
          </button>
          {loading ? (
            <LoadingData />
          ) : dataJobDesk.length > 0 ? (
            <Table>
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Nama Job Desk</Th>
                  <Th>Tunjangan</Th>
                  <Th>Opsi</Th>
                </Tr>
              </Thead>
              <Tbody>
                {dataJobDesk.map((data) => (
                  <Tr key={data.id_job_desk}>
                    <Td>{idNumber++}</Td>
                    <Td>{data.job_desk_name}</Td>
                    <Td>{RP(data.job_desk_allowance)}</Td>
                    <Td>
                      <button
                        type="button"
                        className="mr-2 text-sm p-2 bg-red-500 text-white rounded-md cursor-pointer"
                        onClick={() => {
                          setIdSelected(data.id_job_desk);
                          setShowModalDeleteData(true);
                        }}
                      >
                        <FaTrash />
                      </button>
                      <button
                        type="button"
                        className="text-sm p-2 bg-yellow-500 text-white rounded-md cursor-pointer"
                        onClick={() => {
                          setIdSelected(data.id_job_desk);
                          setShowModalEditData(true);
                        }}
                      >
                        <FaPencil />
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
        <ModalAddJobDesk
          visible={showModalAddData}
          onClose={() => setShowModalAddData(false)}
          onSuccess={() => fetchData()}
        />
        {showModalEditData && (
          <ModalEditJobDesk
            onClose={() => setShowModalEditData(false)}
            id={idSelected}
            onSuccess={() => {
              fetchData();
            }}
          />
        )}

        <ModalDialogConfirmation
          visible={showModalDeleteData}
          onClose={() => setShowModalDeleteData(false)}
          onSuccess={handleDelete}
        />
      </section>
    </>
  );
}

export default JobDeskDataPage;
