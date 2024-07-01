import axios from 'axios';
import config from '../../config';

const sites = () => {
  return axios.get(`${config.API_URL}sites/`);
}

export default {
  sites
};