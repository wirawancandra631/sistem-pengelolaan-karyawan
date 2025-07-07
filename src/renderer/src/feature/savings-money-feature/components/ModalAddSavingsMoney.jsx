import React, { useEffect, useRef, useState } from 'react';
import Modal from '../../../components/Modal';
import { usePostSavingsMoney } from '../../../useFetch/useSavingsMoneyApi';
function ModalAddSavingsMoney({ visible, onClose, onSuccess, id }) {
  const inputFocus = useRef(null);
  const { postData } = usePostSavingsMoney();
  const [form, setForm] = useState({
    employe_id: null,
    savings_nominal: 0,
    savings_request: ''
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
    setForm({
      ...form,
      employe_id: id
    });
  }, [visible]);

  return (
    <Modal visible={visible} onClose={onClose}>
      <form action="" className="w-full" onSubmit={handlePost}>
        <p className="font-semibold">Input Data Tabungan</p>
        <div className="w-full my-5">
          <label htmlFor="savings_nominal" className="block mb-2">
            Nominal
          </label>
          <div className="w-full flex items-center border border-slate-300">
            <span className="p-3 font-bold">Rp</span>
            <input
              type="number"
              name="savings_nominal"
              id="savings_nominal"
              className="block w-full p-3  focus:outline-blue-500"
              ref={inputFocus}
              required
              onChange={(e) => setForm({ ...form, savings_nominal: e.target.value })}
            />
          </div>
        </div>

        <div className="my-5">
          <label htmlFor="savings_request" className="block mb-2">
            Tanggal
          </label>
          <input
            type="date"
            name="savings_request"
            id="savings_request"
            className="w-full p-3 border border-slate-300 focus:outline-blue-500"
            required
            onChange={(e) => setForm({ ...form, savings_request: e.target.value })}
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
  );
}

export default ModalAddSavingsMoney;
