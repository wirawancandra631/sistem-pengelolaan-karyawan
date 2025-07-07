import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa6';
import { HashLoader } from 'react-spinners';
function LoginPage() {
  const [formLogin, setFormLogin] = useState({
    username: '',
    password: ''
  });
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [showModalProgress, setShowModalProgress] = useState(false);
  const handleLogin = (event) => {
    event.preventDefault();
    setShowModalProgress(true);
    setTimeout(() => {
      setShowModalProgress(false);
    }, 4000);
  };
  return (
    <section className="w-full h-screen bg-blue-500 flex justify-center items-center">
      <form action="" className="md:w-[567px] p-6 bg-white rounded-md" onSubmit={handleLogin}>
        <div className="my-4">
          <p className="text-center">Software Sistem Pengelolaan Karyawan</p>
        </div>
        <div className="my-4">
          <p className="text-2xl font-bold">Login Admin</p>
        </div>
        <div className="my-4">
          <label htmlFor="username" className="block mb-2">
            Username
          </label>
          <div className="w-full flex items-center border border-slate-200 hover:border-blue-500">
            <span className="p-2 ">
              <FaUser />
            </span>
            <input
              type="text"
              name="username"
              id="username"
              className="w-full p-2 block bg-slate-50  focus:outline-0 "
              required
            />
          </div>
        </div>

        <div className="my-4">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <div className="w-full flex items-center border border-slate-200 hover:border-blue-500">
            <span className="p-2 " onClick={() => setVisiblePassword(!visiblePassword)}>
              {visiblePassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            <input
              type={visiblePassword ? 'password' : 'text'}
              name="password"
              id="password"
              className="w-full p-2 block bg-slate-50  focus:outline-0 "
              required
            />
          </div>
        </div>
        <div className="my-4">
          <button
            type="submit"
            className="w-full p-4 bg-blue-500 rounded-md text-white font-bold cursor-pointer"
          >
            Login Admin
          </button>
        </div>
      </form>
      {showModalProgress ? (
        <section className="w-full h-full fixed top-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
          <HashLoader color="white" />
        </section>
      ) : (
        <></>
      )}
    </section>
  );
}

export default LoginPage;
