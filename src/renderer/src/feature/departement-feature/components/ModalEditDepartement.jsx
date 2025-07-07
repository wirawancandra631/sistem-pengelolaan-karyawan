import React, { useEffect, useRef, useState } from 'react';
import { useShowDepartement, useUpdateDepartement } from '../../../useFetch/useDepartementApi';
import Modal from '../../../components/Modal';
function ModalEditDepartementComponent({ onClose, onSuccess, id }) {
  const { data: dataDepartement } = useShowDepartement(id);
  const { updateData } = useUpdateDepartement();
  const [form, setForm] = useState({
    departement_name: ''
  });
  const inputFocus = useRef(null);

  const handleUpdate = async (event) => {
    event.preventDefault();
    await updateData(id, form);
    onClose();
    onSuccess();
  };
  useEffect(() => {
    if (dataDepartement) {
      setForm({
        ...form,
        departement_name: dataDepartement.departement_name
      });
    }
  }, [dataDepartement]);
  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, []);
  return (
    <Modal onClose={onClose}>
      <form action="" onSubmit={handleUpdate}>
        <p className="font-semibold text-xl">Edit Data</p>
        <div className="my-5">
          <label htmlFor="departement_name_edit" className="block mb-3">
            Nama Departement
          </label>
          <input
            type="text"
            name="departement_name"
            id="departement_name_edit"
            className="form-control w-full p-3 border border-slate-200 focus:outline-blue-500"
            required
            value={form.departement_name}
            onChange={(e) => setForm({ ...form, departement_name: e.target.value })}
            ref={inputFocus}
          />
        </div>
        <div className="my-5">
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:shadow-lg cursor-pointer"
          >
            SAVE
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default ModalEditDepartementComponent;
