import { axios } from './client';

const request = (action, config) => {
  config.url = `${action}`;
  return axios.post(config);
};

export const requests = {
  getCats: <T>(data: T, options = {}) => request('/getCats', { ...options, ...data }),
  getCat: <T>(data: T, options = {}) => request('/getCat', { ...options, ...data }),
  getUsers: <T>(data: T, options = {}) => request('/getUsers', { ...options, ...data }),
  getUsers2: <T>(data: T, options = {}) => request('/getUsers2', { ...options, ...data }),
};
