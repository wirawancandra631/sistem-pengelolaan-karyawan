import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastError, ToastSuccess } from '../components/Toast';
import { baseURLEmploye } from './baseUrl';
function useFetchEmploye() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(baseURLEmploye);
      const result = res.data.data;
      setData(result);
      return result;
    } catch (m) {
      ToastError(m.message);
      setError(m.message);
      return m.message;
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {
    loading,
    error,
    data,
    setData,
    fetchData
  };
}
function useSearchEmploye() {
  const searchData = async (keyword) => {
    try {
      const data = await axios.get(`${baseURLEmploye}/search?search=${keyword}`);
      const result = await data.data.data;
      return result;
    } catch (m) {
      return m.message;
    }
  };
  return {
    searchData
  };
}
function usePostEmploye() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const postData = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(baseURLEmploye, data);
      ToastSuccess('Data Karyawan berhasil ditambahkan');
      return res;
    } catch (m) {
      setError(m.message);
      ToastError(m.message);
      return m.message;
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    error,
    postData
  };
}
function useShowEmploye(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseURLEmploye}/${id}`);
      const result = res.data.data;
      setData(result);
      return result;
    } catch (m) {
      setError(m.message);
      ToastError(m.message);
      return m.message;
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {
    loading,
    error,
    data,
    fetchData
  };
}
function useUpdateEmploye() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const updateData = async (id, data) => {
    try {
      setLoading(true);
      const res = await axios.put(`${baseURLEmploye}/${id}`, data);
      ToastSuccess('Data Karyawan berhasil diperbarui');
      return res;
    } catch (m) {
      setError(m.message);
      ToastError(m.message);
      return m.message;
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    error,
    updateData
  };
}
function useDeleteEmploye() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const deleteData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`${baseURLEmploye}/${id}`);
      ToastSuccess('Data Karyawan berhasil dihapus');
      return res;
    } catch (m) {
      setError(m.message);
      ToastError(m.message);
      return m.message;
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    error,
    deleteData
  };
}

export {
  useFetchEmploye,
  useSearchEmploye,
  usePostEmploye,
  useShowEmploye,
  useUpdateEmploye,
  useDeleteEmploye
};
