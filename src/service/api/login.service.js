import axios from 'axios';
import config from '../../config';

const register = (username, password) => {
  return axios.post(`${config.API_URL}users/register`, {
    "username": username,
    "password": password
  });
};

const login = (username, password) => {
  return axios.post(`${config.API_URL}users/login`, {
    "username": username,
    "password": password
  });
};

export default {
  register,
  login
};