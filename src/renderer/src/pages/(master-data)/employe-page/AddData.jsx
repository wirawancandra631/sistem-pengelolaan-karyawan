import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaIdBadge, FaInfo, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { usePostEmploye } from '../../../useFetch/useEmployeApi';
import { useFetchJobDesk } from '../../../useFetch/useJobDeskApi';
function EmployeAddDataPage() {
  const navigate = useNavigate();
  const { data: dataJobDesk } = useFetchJobDesk();
  const { error, postData } = usePostEmploye();
  const inputFocus = useRef(null);
  const [form, setForm] = useState({
    employe_nik: '',
    employe_name: '',
    employe_gender: '',
    employe_sallary_basic: '',
    employe_born_date: '',
    employe_email: '',
    employe_number_phone: '',
    job_desk_id: '',
    employe_status: 'EMPLOYE',
    employe_work_entry: '',
    employe_work_leave: '',
    employe_allowance: 0,
    employe_address: ''
  });
  const handleAddData = async (event) => {
    event.preventDefault();
    await postData(form);
    if (error == null) {
      navigate('/master-data/employe');
    }
  };
  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, []);
  return (
    <section className="w-full p-10">
      <Link to={'/master-data/employe'} className="flex items-center">
        <FaChevronLeft className="mr-3" />
        <span>Back</span>
      </Link>
      <form action="" className="mt-5" onSubmit={handleAddData}>
        <div className="mb-3">
          <p className="font-bold text-2xl">Tambah Data Karyawan</p>
        </div>
        <div className="mb-3">
          <p className="mb-3 font-semibold flex items-center">
            <FaInfo className="mr-2" />
            <span>General Information</span>
          </p>
          <div className="flex mb-3">
            <div className="w-[33%] ">
              <label htmlFor="employe_nik" className="block mb-2">
                Nik Karyawan *
              </label>
              <input
                type="number"
                name="employe_nik"
                id="employe_nik"
                className="block w-full p-3 border border-slate-300 bg-white focus:outline-blue-500"
                ref={inputFocus}
                onChange={(e) => setForm({ ...form, employe_nik: e.target.value })}
                required
              />
            </div>

            <div className="w-[33%] mx-2">
              <label htmlFor="employe_sallary_basic" className="block mb-2">
                Gaji Pokok *
              </label>
              <div className="w-full flex items-center border border-slate-300">
                <span className="p-3 font-bold">Rp</span>
                <input
                  type="number"
                  name="employe_sallary_basic"
                  id="employe_sallary_basic"
                  className="block w-full p-3 bg-white  focus:outline-blue-500"
                  onChange={(e) => setForm({ ...form, employe_sallary_basic: e.target.value })}
                />
              </div>
            </div>

            <div className="w-[33%]">
              <label htmlFor="employe_name" className="block mb-2">
                Nama *
              </label>
              <input
                type="text"
                name="employe_name"
                id="employe_name"
                className="block w-full p-3 border bg-white border-slate-300 focus:outline-blue-500"
                required
                onChange={(e) => setForm({ ...form, employe_name: e.target.value })}
              />
            </div>
          </div>
          <div className="flex mb-3">
            <div className="w-1/2 mr-2">
              <label htmlFor="employe_gender" className="block mb-2">
                Gender *
              </label>

              <select
                name="employe_gender"
                id="employe_gender"
                className="block w-full p-3 border border-slate-300 bg-white focus:outline-blue-500"
                required
                onChange={(e) => setForm({ ...form, employe_gender: e.target.value })}
              >
                <option value="">Pilih gender</option>
                <option value="PRIA">PRIA</option>
                <option value="WANITA">WANITA</option>
              </select>
            </div>
            <div className="w-1/2">
              <label htmlFor="employe_born_date" className="block mb-2">
                Tanggal Lahir *
              </label>
              <input
                type="date"
                name="employe_born_date"
                id="employe_born_date"
                className="block w-full p-3 border border-slate-300 bg-white focus:outline-blue-500"
                required
                onChange={(e) => setForm({ ...form, employe_born_date: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <p className="mb-3 font-semibold flex items-center">
            <FaPhoneAlt className="mr-2" />
            <span>Kontak</span>
          </p>
          <div className="flex mb-3">
            <div className="w-1/2 mr-2">
              <label htmlFor="employe_email" className="block mb-2">
                Email *
              </label>
              <input
                type="email"
                name="employe_email"
                id="employe_email"
                className="block w-full p-3 border border-slate-300 bg-white focus:outline-blue-500"
                required
                onChange={(e) => setForm({ ...form, employe_email: e.target.value })}
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="employe_number_phone" className="block mb-2">
                Nomor Handphone
              </label>
              <input
                type="number"
                name="employe_number_phone"
                id="employe_number_phone"
                className="block w-full p-3 border border-slate-300 bg-white focus:outline-blue-500"
                placeholder="088822223333444"
                onChange={(e) => setForm({ ...form, employe_number_phone: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <p className="mb-3 font-semibold flex items-center">
            <FaIdBadge className="mr-2" />
            <span>Informasi Pekerjaan</span>
          </p>
          <div className="flex mb-3">
            <div className="w-1/2 mr-2">
              <label htmlFor="job_desk_id" className="block mb-2">
                Role Pekerjaan *
              </label>
              <select
                name="job_desk_id"
                id="job_desk_id"
                className="block w-full p-3 border border-slate-300 bg-white focus:outline-blue-500"
                required
                onChange={(e) => setForm({ ...form, job_desk_id: e.target.value })}
              >
                <option value="">Pilih Role</option>
                {dataJobDesk.map((d) => (
                  <option key={d.id_job_desk} value={d.id_job_desk}>
                    {d.job_desk_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <label htmlFor="employe_status" className="block mb-2">
                Status Kerja *
              </label>
              <select
                name="employe_status"
                id="employe_status"
                className="block w-full p-3 border border-slate-300 bg-white focus:outline-blue-500"
                required
                onChange={(e) => setForm({ ...form, employe_status: e.target.value })}
              >
                <option value="">Pilih Status</option>
                <option value="EMPLOYE">KARYAWAN</option>
                <option value="INTERNSHIP">MAGANG</option>
              </select>
            </div>
          </div>

          <div className="flex mb-3">
            <div className="w-[33%] ">
              <label htmlFor="employe_work_entry" className="block mb-2">
                Tanggal Masuk Kerja *
              </label>
              <input
                type="date"
                name="employe_work_entry"
                id="employe_work_entry"
                className="block w-full p-3 border border-slate-300 bg-white focus:outline-blue-500"
                required
                onChange={(e) => setForm({ ...form, employe_work_entry: e.target.value })}
              />
            </div>
            <div className="w-[33%] mx-2">
              <label htmlFor="employe_work_leave" className="block mb-2">
                Tanggal Keluar Kerja
              </label>
              <input
                type="date"
                name="employe_work_leave"
                id="employe_work_leave"
                className="block w-full p-3 border border-slate-300 focus:outline-blue-500"
                onChange={(e) => setForm({ ...form, employe_work_leave: e.target.value })}
              />
            </div>

            <div className="w-[33%]">
              <label htmlFor="employe_allowance" className="block mb-2">
                Tunjangan Karyawan
              </label>
              <div className="w-full flex items-center border border-slate-300">
                <span className="p-3 font-bold">Rp</span>
                <input
                  type="number"
                  name="employe_allowance"
                  id="employe_allowance"
                  className="block w-full p-3 bg-white  focus:outline-blue-500"
                  onChange={(e) => setForm({ ...form, employe_allowance: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <p className="mb-3 font-semibold flex items-center">
            <FaInfoCircle className="mr-2" />
            <span>Additional Information</span>
          </p>
          <div className="mb-3">
            <label htmlFor="employe_address" className="block mb-2">
              Alamat Tempat Tinggal
            </label>
            <textarea
              name="employe_address"
              id="employe_address"
              className="block w-full p-3 border border-slate-300 bg-white focus:outline-blue-500"
              onChange={(e) => setForm({ ...form, employe_address: e.target.value })}
            ></textarea>
          </div>
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md cursor-pointer hover:shadow-lg "
          >
            Submit Data
          </button>
        </div>
      </form>
    </section>
  );
}

export default EmployeAddDataPage;
