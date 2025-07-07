import React, { useEffect, useRef, useState } from 'react';
import Modal from '../../../components/Modal';
import { useFetchDepartement } from '../../../useFetch/useDepartementApi';
import { usePostJobDesk } from '../../../useFetch/useJobDeskApi';
function ModalAddJobDesk({ visible, onClose, onSuccess }) {
  const { data: dataDepartement } = useFetchDepartement();
  const { postData } = usePostJobDesk();
  const inputFocus = useRef(null);
  const [form, setForm] = useState({
    departement_id: '',
    job_desk_name: '',
    job_desk_allowance: 0
  });

  const handleAdd = async (event) => {
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
      <form action="" onSubmit={handleAdd}>
        <p className="font-semibold text-xl">Tambah Data</p>
        <div className="my-5">
          <label htmlFor="job_desk_name" className="block mb-3">
            Role Pekerjaan
          </label>
          <input
            type="text"
            name="job_desk_name"
            id="job_desk_name"
            className="form-control w-full p-3 border border-slate-200 focus:outline-blue-500"
            placeholder="Digital Marketing"
            required
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
            <option value="">Pilih Departement</option>
            {dataDepartement.length > 0 &&
              dataDepartement.map((data) => (
                <option value={data.id_departement} key={data.id_departement}>
                  {data.departement_name}
                </option>
              ))}
          </select>
        </div>
        <div className="my-5">
          <label htmlFor="job_desk_allowance" className="block mb-3">
            Tunjangan
          </label>
          <div className=" flex border border border-slate-200">
            <span className="p-3 bg-slate-50 font-bold">Rp</span>
            <input
              type="number"
              name="job_desk_allowance"
              id="job_desk_allowance"
              className="form-control w-full p-3  focus:outline-blue-500"
              placeholder="100000"
              onChange={(e) => setForm({ ...form, job_desk_allowance: e.target.value })}
            />
          </div>
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

export default ModalAddJobDesk;
