import React, { useEffect, useRef, useState } from 'react';
import Modal from '../../../components/Modal';
import { usePostDebtMoney } from '../../../useFetch/useDebtMoneyApi';
function ModalAddDebtMoney({ visible, onClose, onSuccess, id }) {
  const inputFocus = useRef(null);
  const { postData } = usePostDebtMoney();
  const [form, setForm] = useState({
    employe_id: null,
    debt_nominal: 0,
    debt_request: ''
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
        <p className="font-semibold">Ajukan Data Pinjaman</p>

        <div className="w-full my-5">
          <label htmlFor="debt_nominal" className="block mb-2">
            Nominal
          </label>
          <div className="w-full flex items-center border border-slate-300">
            <span className="p-3 font-bold">Rp</span>
            <input
              type="number"
              name="debt_nominal"
              id="debt_nominal"
              className="block w-full p-3  focus:outline-blue-500"
              ref={inputFocus}
              required
              onChange={(e) => setForm({ ...form, debt_nominal: e.target.value })}
            />
          </div>
        </div>

        <div className="my-5">
          <label htmlFor="debt_request" className="block mb-2">
            Tanggal
          </label>
          <input
            type="date"
            name="debt_request"
            id="debt_request"
            className="w-full p-3 border border-slate-300 focus:outline-blue-500"
            required
            onChange={(e) => setForm({ ...form, debt_request: e.target.value })}
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

export default ModalAddDebtMoney;
