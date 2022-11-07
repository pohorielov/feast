import { $host, $authHost } from './index';

export const registration = async (email, password) => {
  const response = await $host.post('api/auth/signup', { email, password, role: 'client' });
  return response;
};

export const login = async (email, password) => {
  const response = await $host.post('api/auth/login', { email, password });
  return response;
};

export const check = async () => {
  const response = await $host.post('api/auth/signup');
  return response;
};
