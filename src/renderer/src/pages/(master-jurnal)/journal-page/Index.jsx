import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { FaCalendar, FaFile } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import EmptyData from '../../../components/EmptyData';
import LoadingData from '../../../components/LoadingData';
import Modal from '../../../components/Modal';
import ModalAddJournal from '../../../feature/JournalSallaryFeature/Components/ModalAddJournal';
import { useFetchJournal } from '../../../useFetch/useJurnalApi';
function JurnalSallaryPage() {
  const { loading, data: dataJournal } = useFetchJournal();
  const [showModalAdd, setShowModalAdd] = useState(false);

  return (
    <>
      <section className="w-full p-10">
        <p className="text-2xl font-bold">Data Jurnal</p>
        <div className="w-full my-5">
          <button
            type="button"
            className="px-10 py-5 bg-purple-500 text-white rounded-md flex items-center space-x-4 cursor-pointer hover:shadow-lg"
            onClick={() => setShowModalAdd(true)}
          >
            <FaPlusCircle />
            <span>Buat Jurnal</span>
          </button>
        </div>
        <div className="w-full">
          <p className="mb-5">Daftar jurnal</p>
          {loading ? (
            <LoadingData />
          ) : dataJournal.length > 0 ? (
            dataJournal.map((data) => {
              return (
                <Link
                  key={data.id_journal}
                  to={'/master-jurnal/jurnal-sallary/detail/' + data.id_journal}
                  className="mb-2 flex items-center  space-x-4 w-full p-4 bg-white shadow-md rounded-md cursor-pointer hover:shadow-lg"
                >
                  <div className="pt-4">
                    <FaFile className="text-4xl" />
                  </div>
                  <div className="w-full ">
                    <small className="flex items-center justify-end">
                      <FaCalendar />
                      <span>{data.journal_created_at}</span>
                    </small>
                    <p>{data.journal_title}</p>
                  </div>
                </Link>
              );
            })
          ) : (
            <EmptyData />
          )}
        </div>
      </section>
      <ModalAddJournal visible={showModalAdd} onClose={() => setShowModalAdd(false)} />
    </>
  );
}

export default JurnalSallaryPage;
