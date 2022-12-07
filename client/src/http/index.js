import axios from 'axios';

export const $host = axios.create({
  withCredentials: true,
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_URL,
});

$host.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  return config;
});
