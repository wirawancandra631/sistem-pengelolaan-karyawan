import React, { useEffect, useRef, useState } from 'react';
import Modal from '../../../components/Modal';
import { usePostJournal } from '../../../useFetch/useJurnalApi';
import { HashLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
function ModalAddJournal({ visible, onClose, onSuccess }) {
  const navigate = useNavigate();
  const { loading, postData } = usePostJournal();
  const inputFocus = useRef(null);
  const [form, setForm] = useState({
    journal_period: '',
    journal_title: ''
  });
  const handlePost = async (event) => {
    event.preventDefault();
    try {
      await postData(form);
      onClose();
      onSuccess();
    } catch (m) {}
  };
  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, [visible]);
  return (
    <>
      <Modal visible={visible} onClose={onClose}>
        <form action="" className="w-full" onSubmit={handlePost}>
          <p className="font-bold">Buat Jurnal</p>
          <div className="my-5">
            <label htmlFor="journal_title" className="block mb-2">
              Nama Jurnal
            </label>
            <input
              type="text"
              name="journal_title"
              id="journal_title"
              className="w-full p-3 border border-slate-200 focus:outline-blue-500"
              placeholder="Jurnal Gaji Bulan Januari 2025"
              required
              ref={inputFocus}
              onChange={(e) => setForm({ ...form, journal_title: e.target.value })}
            />
          </div>

          <div className="my-5">
            <label htmlFor="journal_periode" className="block mb-2">
              Periode Jurnal
            </label>
            <input
              type="month"
              name="journal_periode"
              id="journal_periode"
              className="w-full p-3 border border-slate-200 focus:outline-blue-500"
              required
              onChange={(e) => setForm({ ...form, journal_period: e.target.value })}
            />
          </div>
          <div className="my-5">
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-md cursor-pointer"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </Modal>
      {loading && (
        <section className="w-full flex items-center justify-center h-screen fixed left-0 top-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-50">
          <HashLoader color="white" />
        </section>
      )}
    </>
  );
}

export default ModalAddJournal;
