import React, { useEffect, useRef, useState } from 'react';
import { ModalLarge } from '../../../components/Modal';
import { usePostSallary } from '../../../useFetch/useSallaryApi';
function ModalAddSallary({ visible, onClose, onSuccess, id }) {
  const inputFocus = useRef(null);
  const { postData } = usePostSallary();
  const [form, setForm] = useState({
    employe_id: null,
    journal_sallary_id: null,
    intensive_per_day: 0,
    intensive_total_day: 0,
    sallary_bonus: 0,
    bonus_description: '',
    overtime_per_day: 0,
    overtime_total_day: 0,
    deductions_total: 0,
    deduction_description: ''
  });
  const handlePost = async (event) => {
    event.preventDefault(0);
    try {
      console.log(form);
      // return true;
      await postData(form);
      onClose();
    } catch (m) {}
  };
  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
    setForm({
      ...form,
      employe_id: id.employe_id,
      journal_sallary_id: id.journal_sallary_id
    });
  }, [visible]);
  return (
    <ModalLarge visible={visible} onClose={onClose}>
      <form action="" className="w-full" onSubmit={handlePost}>
        <div className="my-5 flex">
          <div className="w-1/2 mr-2">
            <label htmlFor="intensive_per_day" className="block mb-2">
              Upah intensif/hari
            </label>
            <div className="w-full border border-slate-300 flex items-center">
              <span className="p-3 font-bold bg-slate-50">Rp</span>
              <input
                type="number"
                name="intensive_per_day"
                id="intensive_per_day"
                className="w-full p-3 focus:outline-blue-500"
                ref={inputFocus}
                required
                onChange={(e) => setForm({ ...form, intensive_per_day: e.target.value })}
              />
            </div>
          </div>
          <div className="w-1/2">
            <label htmlFor="intensive_total_day" className="block mb-2">
              Total Hari
            </label>

            <input
              type="number"
              name="intensive_total_day"
              id="intensive_total_day"
              className="w-full p-3 border border-slate-300 focus:outline-blue-500"
              required
              onChange={(e) => setForm({ ...form, intensive_total_day: e.target.value })}
            />
          </div>
        </div>

        <div className="my-5 flex">
          <div className="w-1/2 mr-2">
            <label htmlFor="overtime_per_day" className="block mb-2">
              Upah lembur/hari
            </label>
            <div className="w-full border border-slate-300 flex items-center">
              <span className="p-3 font-bold bg-slate-50">Rp</span>
              <input
                type="number"
                name="overtime_per_day"
                id="overtime_per_day"
                className="w-full p-3 focus:outline-blue-500"
                onChange={(e) => setForm({ ...form, overtime_per_day: e.target.value })}
              />
            </div>
          </div>
          <div className="w-1/2">
            <label htmlFor="overtime_total_day" className="block mb-2">
              Total Hari
            </label>

            <input
              type="number"
              name="overtime_total_day"
              id="overtime_total_day"
              className="w-full p-3 border border-slate-300 focus:outline-blue-500"
              onChange={(e) => setForm({ ...form, overtime_total_day: e.target.value })}
            />
          </div>
        </div>
        <div className="my-5">
          <label htmlFor="sallary_bonus" className="block mb-2">
            Bonus Karyawan
          </label>
          <div className="w-full border border-slate-300 flex items-center">
            <span className="p-3 font-bold bg-slate-50">Rp</span>
            <input
              type="number"
              name="sallary_bonus"
              id="sallary_bonus"
              className="w-full p-3 focus:outline-blue-500"
              onChange={(e) => setForm({ ...form, sallary_bonus: e.target.value })}
            />
          </div>
        </div>
        <div className="my-5">
          <label htmlFor="bonus_description" className="block mb-2">
            Deskripsi Bonus
          </label>
          <textarea
            name="bonus_description"
            id="bonus_description"
            cols="30"
            rows="3"
            className="w-full p-3 border border-slate-300 focus:outline-blue-500"
            onChange={(e) => setForm({ ...form, bonus_description: e.target.value })}
          ></textarea>
        </div>

        <div className="my-5">
          <label htmlFor="deductions_total" className="block mb-2">
            Potongan Karyawan
          </label>
          <div className="w-full border border-slate-300 flex items-center">
            <span className="p-3 font-bold bg-slate-50">Rp</span>
            <input
              type="number"
              name="deductions_total"
              id="deductions_total"
              className="w-full p-3 focus:outline-blue-500"
              onChange={(e) => setForm({ ...form, deductions_total: e.target.value })}
            />
          </div>
        </div>
        <div className="my-5">
          <label htmlFor="deductions_description" className="block mb-2">
            Deskripsi Potongan
          </label>
          <textarea
            name="deductions_description"
            id="deductions_description"
            cols="30"
            rows="3"
            className="w-full p-3 border border-slate-300 focus:outline-blue-500"
            onChange={(e) => setForm({ ...form, deduction_description: e.target.value })}
          ></textarea>
        </div>
        <div className="my-5">
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md cursor-pointer hover:shadow-lg"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </ModalLarge>
  );
}

export default ModalAddSallary;
