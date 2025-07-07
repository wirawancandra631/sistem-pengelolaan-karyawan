import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseURLDebtMoney, baseURLSavingsMoney } from './baseUrl';
import { ToastSuccess, ToastError } from '../components/Toast';
function useFetchSavingsMoney() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(baseURLSavingsMoney);
      const result = await res.data.data;
      setData(result);
      return result;
    } catch (m) {
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
    fetchData
  };
}
function usePostSavingsMoney() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const postData = async (data) => {
    try {
      const res = await axios.post(baseURLSavingsMoney, data);
      ToastSuccess('Data Tabungan berhasil ditambahkan');
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
function useShowSavingsMoney(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseURLSavingsMoney}/${id}`);
      const result = await res.data.data;
      setData(result);
      return result;
    } catch (m) {
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
    fetchData
  };
}
function useDeleteSavingsMoney() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const deleteData = async (id) => {
    try {
      const res = await axios.delete(`${baseURLSavingsMoney}/${id}`);
      ToastSuccess('Data Tabungan berhasil dihapus');
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
export { useFetchSavingsMoney, usePostSavingsMoney, useShowSavingsMoney, useDeleteSavingsMoney };
