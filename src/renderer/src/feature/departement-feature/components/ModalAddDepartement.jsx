import React, { useEffect, useRef, useState } from 'react';
import { usePostDepartement } from '../../../useFetch/useDepartementApi';
import Modal from '../../../components/Modal';
function ModalAddDepartementComponent({ visible, onClose, onSuccess }) {
  const { postData } = usePostDepartement();
  const [form, setForm] = useState({
    departement_name: ''
  });
  const inputFocus = useRef(null);
  const handlePost = async (event) => {
    event.preventDefault();
    await postData(form);
    onClose();
    onSuccess();
  };
  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, [visible]);
  return (
    <Modal visible={visible} onClose={onClose}>
      <form action="" onSubmit={handlePost}>
        <p className="font-semibold text-xl">Tambah Data</p>
        <div className="my-5">
          <label htmlFor="departement_name" className="block mb-3">
            Nama Departement
          </label>
          <input
            type="text"
            name="departement_name"
            id="departement_name"
            className="form-control w-full p-3 border border-slate-200 focus:outline-blue-500"
            placeholder="Marketing"
            required
            onChange={(e) => setForm({ ...form, departement_name: e.target.value })}
            ref={inputFocus}
          />
        </div>
        <div className="my-5">
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:shadow-lg cursor-pointer"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default ModalAddDepartementComponent;
