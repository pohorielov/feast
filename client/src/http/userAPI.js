import jwt_decode from 'jwt-decode';

import { $host, $authHost } from './index';

export const registration = async (email, password, role) => {
  const { data } = await $host.post('auth/signup', { email, password, role });
  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post('auth/login', { email, password });
  return jwt_decode(data.token);
};

export const check = async () => {
  const response = await $host.post('auth/signup');
  return response;
};
