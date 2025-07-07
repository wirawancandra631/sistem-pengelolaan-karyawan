import React, { useEffect, useRef, useState } from 'react';
import Modal from '../../../components/Modal';
import { useFetchDepartement } from '../../../useFetch/useDepartementApi';
import { useShowJobDesk, useUpdateJobDesk } from '../../../useFetch/useJobDeskApi';
function ModalEditJobDesk({ visible, onClose, onSuccess, id }) {
  const { data } = useFetchDepartement();
  const { data: dataEdit, fetchData } = useShowJobDesk(id);
  const { updateData } = useUpdateJobDesk();
  const inputFocus = useRef(null);
  const [form, setForm] = useState({
    departement_id: null,
    departement_name: '',
    job_desk_name: '',
    job_desk_allowance: 0
  });
  const handleUpdate = async (event) => {
    event.preventDefault();
    await updateData(id, form);
    onSuccess();
    onClose();
  };
  useEffect(() => {
    if (dataEdit) {
      setForm({
        departement_id: dataEdit.departement_id,
        departement_name: dataEdit.departement.departement_name,
        job_desk_name: dataEdit.job_desk_name,
        job_desk_allowance: dataEdit.job_desk_allowance
      });
    }
  }, [dataEdit]);
  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, [visible]);
  return (
    <Modal visible={visible} onClose={onClose}>
      <form action="" onSubmit={handleUpdate}>
        <p className="font-semibold text-xl">Edit Data</p>
        <div className="my-5">
          <label htmlFor="job_desk_name_edit" className="block mb-3">
            Role Pekerjaan
          </label>
          <input
            type="text"
            name="job_desk_name"
            id="job_desk_name_edit"
            className="form-control w-full p-3 border border-slate-200 focus:outline-blue-500"
            placeholder="Digital Marketing"
            value={form.job_desk_name}
            onChange={(e) => setForm({ ...form, job_desk_name: e.target.value })}
            ref={inputFocus}
          />
        </div>
        <div className="my-5">
          <label htmlFor="departement_id" className="block mb-3">
            Departement
          </label>
          <select
            name="departement_id"
            id="departement_id"
            className="form-control w-full p-3 border border-slate-200 focus:outline-blue-500"
            required
            onChange={(e) => setForm({ ...form, departement_id: e.target.value })}
          >
            <option value={form.departement_id}>{form.departement_name}</option>
            {data.length > 0 &&
              data.map((d) => (
                <option value={d.id_departement} key={d.id_departement}>
                  {d.departement_name}
                </option>
              ))}
          </select>
        </div>
        <div className="my-5">
          <label htmlFor="job_desk_allowance_edit" className="block mb-3">
            Tunjangan
          </label>
          <div className=" flex border border border-slate-200">
            <span className="p-3 bg-slate-50 font-bold">Rp</span>
            <input
              type="text"
              name="job_desk_allowance"
              id="job_desk_allowance_edit"
              className="form-control w-full p-3  focus:outline-blue-500"
              placeholder="100000"
              value={form.job_desk_allowance}
              onChange={(e) => setForm({ ...form, job_desk_allowance: e.target.value })}
            />
          </div>
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

export default ModalEditJobDesk;
