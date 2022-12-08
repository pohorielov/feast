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

$host.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/refresh`, { withCredentials: true });
        localStorage.setItem('token', response.data.accessToken);
        return $host.request(originalRequest);
      } catch (e) {
        console.log('Не авторизован');
      }
    }
    throw error;
  },
);
