import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const api = axios.create({
  withCredentials: true,
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    const dataToken = jwt_decode(token);
    const end = new Date(dataToken.exp * 1000).getTime();
    const now = new Date().getTime();
    const isExp = now > end;
    if (isExp) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // eslint-disable-next-line no-undef
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/refresh`, { withCredentials: true });
      localStorage.setItem('accessToken', response.data.accessToken);
      // return api.request(config);
    }
  }
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    if (error.response.status == 401) {
      console.log('Не авторизован');
    }
    throw error;
  },
);
