import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseURLEmploye, baseURLJournal } from './baseUrl';
import { ToastSuccess, ToastError } from '../components/Toast';
function useFetchJournal() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(baseURLJournal);
      const result = await res.data.data;
      setData(result);
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
function useShowJournal() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const fetchData = async (id) => {
    try {
      const res = await axios.get(`${baseURLJournal}/${id}`);
      const result = await res.data.data;
      setData(result);
    } catch (m) {
      setError(m.message);
      return m.message;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    data,
    fetchData
  };
}

function usePostJournal() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const postData = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(baseURLJournal, data);
      ToastSuccess('Data Jurnal berhasil dibuat');
      return res;
    } catch (m) {
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

function useDeleteJournal() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const deleteData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`${baseURLJournal}/${id}`);
      ToastSuccess('Data Jurnal berhasil dihapus');
      return res;
    } catch (m) {
      setError(m.message);
      ToastError(m.message);
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

export { useFetchJournal, usePostJournal, useShowJournal, useDeleteJournal };
