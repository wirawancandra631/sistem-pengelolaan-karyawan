import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { FaPencil, FaTrash } from 'react-icons/fa6';
import ModalAddDepartementComponent from '../../../feature/departement-feature/components/ModalAddDepartement';
import ModalEditDepartementComponent from '../../../feature/departement-feature/components/ModalEditDepartement';
import EmptyData from '../../../components/EmptyData';
import LoadingData from '../../../components/LoadingData';
import Modal, { ModalDialogConfirmation } from '../../../components/Modal';
import { Table, Td, Th, Thead, Tr, Tbody } from '../../../components/TableComponent';
import { useDeleteDepartement, useFetchDepartement } from '../../../useFetch/useDepartementApi';

function DepartementDataPage() {
  let idNumber = 1;
  const [showModalAddData, setShowModalAddData] = useState(false);
  const [showModalEditData, setShowModalEditData] = useState(false);
  const [showModalDeleteData, setShowModalDeleteData] = useState(false);
  const { loading, data: dataDepartement, fetchData } = useFetchDepartement();
  const { deleteData } = useDeleteDepartement();
  const [idSelected, setIdSelected] = useState(null);
  const handleDelete = async () => {
    await deleteData(idSelected);
    setShowModalDeleteData(false);
    fetchData();
  };

  return (
    <>
      <section className="w-full p-10">
        <p className="text-2xl font-bold">Data Departement Perusahaan</p>
        <div className="w-full overflow-x-auto mt-5">
          <button
            type="button"
            className="flex items-center ml-auto block px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:shadow-lg"
            onClick={() => {
              setShowModalAddData(true);
            }}
          >
            <FaPlusCircle className="mr-2" />
            <span>Input Data</span>
          </button>
          {loading ? (
            <LoadingData />
          ) : dataDepartement.length > 0 ? (
            <Table>
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Nama Departement</Th>
                  <Th>Opsi</Th>
                </Tr>
              </Thead>
              <Tbody>
                {dataDepartement.map((data) => (
                  <Tr key={data.id_departement}>
                    <Td>{idNumber++}</Td>
                    <Td>{data.departement_name}</Td>
                    <Td>
                      <button
                        type="button"
                        className="mr-2 text-sm p-2 bg-red-500 text-white rounded-md cursor-pointer"
                        onClick={() => {
                          setIdSelected(data.id_departement);
                          setShowModalDeleteData(true);
                        }}
                      >
                        <FaTrash />
                      </button>
                      <button
                        type="button"
                        className="text-sm p-2 bg-yellow-500 text-white rounded-md cursor-pointer"
                        onClick={() => {
                          setIdSelected(data.id_departement);
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
      </section>

      <ModalAddDepartementComponent
        visible={showModalAddData}
        onClose={() => setShowModalAddData(false)}
        onSuccess={() => fetchData()}
      />

      {showModalEditData && (
        <ModalEditDepartementComponent
          onClose={() => setShowModalEditData(false)}
          id={idSelected}
          onSuccess={() => fetchData()}
        />
      )}

      <ModalDialogConfirmation
        visible={showModalDeleteData}
        onClose={() => setShowModalDeleteData(false)}
        onSuccess={() => {
          handleDelete();
        }}
      />
    </>
  );
}

export default DepartementDataPage;
