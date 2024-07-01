import axios from 'axios';
import config from '../../config';

const register = async (username, password, site) => {
  return await axios.post(`${config.API_URL}users/register`, {
    "username": username,
    "password": password,
    "site": site
  });
};

const login = async (username, password, site) => {
  const response = await axios.post(`${config.API_URL}users/login`, {
                    "username": username,
                    "password": password,
                    "site": site
                  });
  
  if (response.data.token) {
    
    // get site of loggedUser
    const siteResponse = await axios.get(`${config.API_URL}sites/${response.data.user.site}`);
    if (siteResponse) {
      response.data.user.sitename = siteResponse.data.sitename;
    }

    const tokenData = {
                        token: response.data.token,
                        expiry: Date.now() + (3600 * 1000) // Assuming token expires in 1 hour
                      };
    sessionStorage.setItem('token', JSON.stringify(tokenData));
    sessionStorage.setItem('loggedUser', JSON.stringify(response.data.user));
  }
};

const logout = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('loggedUser');
};

const getToken = () => {
  const tokenData = JSON.parse(sessionStorage.getItem('token'));
  if (tokenData) {
    const token = tokenData ? tokenData.token: null;
    const tokenExpiry = tokenData.expiry;
    if (token && tokenExpiry && Date.now() < tokenExpiry) {
      return token;
    }
    logout();
  }
  return null;
};

export default {
  register,
  login,
  logout,
  getToken
};