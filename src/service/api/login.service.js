import axios from 'axios';
import config from '../../config';

const register = (username, password, site) => {
  return axios.post(`${config.API_URL}users/register`, {
    "username": username,
    "password": password,
    "site": site
  });
};

const login = (username, password, site) => {
  return axios.post(`${config.API_URL}users/login`, {
    "username": username,
    "password": password,
    "site": site
  });
};

export default {
  register,
  login
};