import axios from 'axios';

import { setToken } from '../utils/user/login';

import { api } from './index';

export const registration = async (email, password, role) => {
  const { data } = await api.post('auth/signup', { email, password, role });
  return setToken(data);
};
export const login = async (email, password) => {
  const { data } = await api.post('auth/login', { email, password });
  return setToken(data);
};
export const logout = async () => {
  return await api.post('auth/logout');
};
export const refresh = async () => {
  // eslint-disable-next-line no-undef
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/auth/refresh`, { withCredentials: true });
  localStorage.setItem('accessToken', data.accessToken);
  return data;
};
export const getUsers = async () => {
  return await api.get('users');
};
