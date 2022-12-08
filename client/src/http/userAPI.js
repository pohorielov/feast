import axios from 'axios';

import { setToken } from '../utils/user/login';

import { $host } from './index';

export const registration = async (email, password, role) => {
  const { data } = await $host.post('auth/signup', { email, password, role });
  return setToken(data);
};
export const login = async (email, password) => {
  const { data } = await $host.post('auth/login', { email, password });
  return setToken(data);
};
export const logout = async () => {
  return await $host.post('auth/logout');
};
export const refresh = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/auth/refresh`, { withCredentials: true });
  localStorage.setItem('accessToken', data.accessToken);
  return data;
};
