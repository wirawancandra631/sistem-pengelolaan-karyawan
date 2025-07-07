import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseURLSallary } from './baseUrl';
import { ToastSuccess, ToastError } from '../components/Toast';
function useFetchSallary(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseURLSallary}/${id}`);
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
function useShowSallary(id_sallary) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseURLSallary}/detail/${id_sallary}`);
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

function usePostSallary() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const postData = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(`${baseURLSallary}`, data);
      ToastSuccess('Data Sallary berhasil dibuat');
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

function useUpdateSallary() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const updateData = async (id, data) => {
    console.log(id);
    try {
      setLoading(true);
      const res = await axios.put(`${baseURLSallary}/${id}`, data);
      ToastSuccess('Data Sallary berhasil diedit');
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

export { useFetchSallary, usePostSallary, useShowSallary, useUpdateSallary };
