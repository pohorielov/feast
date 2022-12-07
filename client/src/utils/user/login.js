import jwt_decode from 'jwt-decode';

export const setToken = (data) => {
  localStorage.setItem('accessToken', data.accessToken);
  return jwt_decode(data.accessToken);
};
