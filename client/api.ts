import { axios } from './client';

const request = (action, config) => {
  config.url = `${action}`;
  return axios.post(config);
};

export const requests = {
  getCats: <T>(data: T, options = {}) => request('/getCats', { ...options, ...data }),
  getCat: <T>(data: T, options = {}) => request('/getCat', { ...options, ...data }),
};
