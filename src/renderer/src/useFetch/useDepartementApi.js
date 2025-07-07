import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ToastError, ToastSuccess } from '../components/Toast';
import { baseURL, baseURLDepartement } from './baseUrl';

function useFetchDepartement() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(baseURLDepartement);
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
    fetchData
  };
}
function usePostDepartement() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const postData = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(baseURLDepartement, data);
      ToastSuccess('Data Departement berhasil ditambahkan');
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
    postData
  };
}
function useShowDepartement(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseURLDepartement}/${id}`);
      const result = res.data.data;
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
function useUpdateDepartement() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = async (id, data) => {
    try {
      setLoading(true);
      const res = await axios.put(`${baseURLDepartement}/${id}`, data);
      ToastSuccess('Data Departement berhasil diperbarui');
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
    updateData
  };
}
function useDeleteDepartement() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const deleteData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`${baseURLDepartement}/${id}`);
      ToastSuccess('Data Departement berhasil dihapus');
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

export {
  useFetchDepartement,
  usePostDepartement,
  useDeleteDepartement,
  useShowDepartement,
  useUpdateDepartement
};
