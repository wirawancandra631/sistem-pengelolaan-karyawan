import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseURLDebtMoney } from './baseUrl';
import { ToastSuccess, ToastError } from '../components/Toast';
function useFetchDebtMoney() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(baseURLDebtMoney);
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
function usePostDebtMoney() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(baseURLDebtMoney, data);
      ToastSuccess('Data Pinjaman berhasil ditambahkan');
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
function useShowDebtMoney(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseURLDebtMoney}/${id}`);
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
function useDeleteDebtMoney() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`${baseURLDebtMoney}/${id}`);
      ToastSuccess('Data Pinjaman berhasil dihapus');
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
export { useFetchDebtMoney, usePostDebtMoney, useShowDebtMoney, useDeleteDebtMoney };
