import { useEffect, useState } from 'react';
import { ToastError, ToastSuccess } from '../components/Toast';
import { baseURL, baseURLJobDesk } from './baseUrl';
import axios from 'axios';
function useFetchJobDesk() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(baseURLJobDesk);
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
function usePostJobDesk() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(baseURLJobDesk, data);
      ToastSuccess('Data Job Desk berhasil ditambahkan');
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
function useShowJobDesk(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseURLJobDesk}/${id}`);
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
function useUpdateJobDesk() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const updateData = async (id, data) => {
    try {
      setLoading(true);
      const res = await axios.put(`${baseURLJobDesk}/${id}`, data);
      ToastSuccess('Data Job Desk berhasil diperbarui');
      return res;
    } catch (m) {
      ToastError(m.message);
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
    updateData
  };
}
function useDeleteJobDesk() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const deleteData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`${baseURLJobDesk}/${id}`);
      ToastSuccess('Data Job Desk berhasil dihapus');
      return res;
    } catch (m) {
      ToastError(m.message);
      setError(m.message);
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
export { useFetchJobDesk, usePostJobDesk, useDeleteJobDesk, useShowJobDesk, useUpdateJobDesk };
